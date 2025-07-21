import dotenv from "dotenv";

import nodemailer from "nodemailer";

dotenv.config();

class SendEmailController {
  async send(req, res) {
    try {
      const { name, phone, email, comment, order } = req.body;
      const file = req.file;

      const generateOrderTable = (orderData) => {
        try {
          const items = JSON.parse(orderData);

          if (!Array.isArray(items) || items.length === 0) {
            return {
              tableHtml: "<p>Нет данных о заказе</p>",
              totalSum: 0,
              customOrderCount: 0,
            };
          }

          let totalSum = 0;
          let customOrderCount = 0;

          const rows = items
            .map((item) => {
              // Подсчет суммы для товаров с ценой
              if (typeof item.price === "number") {
                totalSum += item.price * (item.quantity || 1);
              } else if (item.price === "Под заказ") {
                customOrderCount += item.quantity || "Не указано";
              }

              return `
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${
                  item.id || "Н/Д"
                }</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${
                  item.name || "Н/Д"
                }</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${
                  item.price || "Под заказ"
                }</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${
                  item.quantity || 1
                }</td>
              </tr>
            `;
            })
            .join("");

          const tableHtml = `
            <table style="border-collapse: collapse; width: 100%; margin: 15px 0;">
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Код 1С</th>
                  <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Подшипник</th>
                  <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Цена</th>
                  <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Штук</th>
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>`;

          return {
            tableHtml,
            totalSum,
            customOrderCount,
          };
        } catch (e) {
          console.error("Error generating order table:", e);
          return {
            tableHtml: "<p>Ошибка формирования данных заказа</p>",
            totalSum: 0,
            customOrderCount: 0,
          };
        }
      };

      const { tableHtml, totalSum, customOrderCount } =
        generateOrderTable(order);

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: `"РВЗ ГРУПП" <${process.env.EMAIL_USER}>`,
        to: `${process.env.EMAIL_USER}`,
        subject: `Новый заказ от ${name}`,
        text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nКомментарий: ${
          comment || "Нет комментария"
        }`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 100%;">
            <h2 style="color: #333;">Новый заказ с сайта</h2>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p><strong>Имя:</strong> ${name}</p>
              <p><strong>Телефон:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${
                comment ? `<p><strong>Комментарий:</strong> ${comment}</p>` : ""
              }
            </div>
            
            <h3 style="color: #333; margin-top: 20px;">Состав заказа:</h3>
            ${tableHtml}
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
              <p style="font-weight: bold; margin-bottom: 5px;">Итого:</p>
              ${
                totalSum > 0
                  ? `<p>Общая сумма заказа: <strong>${totalSum.toFixed(
                      2
                    )} руб.</strong></p>`
                  : ""
              }
              ${
                customOrderCount > 0
                  ? `<p>Товаров под заказ: <strong>${customOrderCount} шт.</strong></p>`
                  : ""
              }
            </div>
            
            <p style="margin-top: 20px; font-size: 12px; color: #777;">
              Это письмо было отправлено с формы заказа на сайте <a target="_blank" href="https://rvzgroup.ru/">rvzgroup.ru</a>
            </p>
          </div>
        `,
      };

      if (file) {
        mailOptions.attachments = [
          {
            filename: file.originalname,
            content: file.buffer,
            contentType: file.mimetype,
          },
        ];
      }

      // Отправка письма
      await transporter.sendMail(mailOptions);

      console.log("Письмо отправлено");
      res.status(200).json({ message: "Письмо успешно отправлено!" });
    } catch (error) {
      console.error("Ошибка отправки письма:", error);
      res.status(500).json({ message: "Ошибка отправки письма" });
    }
  }
}

export default new SendEmailController();
