import nodemailer from "nodemailer";

class SendEmailController {
  async send(req, res) {
    try {
      const { name, phone, email, comment, bearing } = req.body;
      const file = req.file;

      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io", // Замените на ваш SMTP-сервер
        port: 587, // Замените на порт вашего SMTP-сервера
        secure: false, // true для 465, false для других портов
        auth: {
          user: "c6943790b5b960", // Замените на вашу электронную почту
          pass: "36b9930accfcf9", // Замените на ваш пароль
        },
      });

      let mailOptions = {
        from: "sale@podshipnik-discount.ru", // Замените на вашу электронную почту
        to: "sale@podshipnik-discount.ru", // Замените на адрес получателя
        subject: "Новый заказ с сайта",
        text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nПодшипник: ${
          bearing || "Не указан"
        }\nКомментарий: ${comment}`,
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
