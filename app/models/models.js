import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Bearing = sequelize.define("bearing", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id1c: { type: DataTypes.STRING },
  id1cRvz: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
  priceRvz: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  quantityRvz: { type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING, unique },
  url: { type: DataTypes.STRING, unique },
  title: { type: DataTypes.STRING, unique },
  h1: { type: DataTypes.STRING, unique },
  description: { type: DataTypes.STRING, unique },
  group: { type: DataTypes.STRING },
  for_img: { type: DataTypes.STRING },
  brand: { type: DataTypes.STRING },
  analog: { type: DataTypes.STRING },
  analogUrl: { type: DataTypes.STRING },
  images: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
  innerDiameter: { type: DataTypes.STRING },
  outerDiameter: { type: DataTypes.STRING },
  width: { type: DataTypes.STRING },
  weight: { type: DataTypes.STRING },
  new_product: { type: DataTypes.BOOLEAN },
  stock: { type: DataTypes.INTEGER },
  popular: { type: DataTypes.BOOLEAN },
  seal: { type: DataTypes.STRING }, // открытый, закрытый
  bearing_seal: { type: DataTypes.STRING }, // ZZ, 2RS
  sep: { type: DataTypes.STRING }, // стальнй, латунный
  material: { type: DataTypes.STRING }, // сталь ШХ 15
  groove: { type: DataTypes.STRING }, // канавка под стопорное кольцо
  inner_ring: { type: DataTypes.STRING }, // внутренее кольцо
  outer_ring: { type: DataTypes.STRING }, // наружное кольцо
  groove_for_balls: { type: DataTypes.STRING }, // канавка для шариков
  hole: { type: DataTypes.STRING }, // отверстие
  corner: { type: DataTypes.STRING }, // угол
  feature: { type: DataTypes.STRING }, // особенность 1
  feature_2: { type: DataTypes.STRING }, // особенность 2
  montage: { type: DataTypes.STRING }, // монтаж
  bushing: { type: DataTypes.STRING }, // втулка
  corpus: { type: DataTypes.STRING }, // корпус
  bearing_for_corpus: { type: DataTypes.STRING }, // подшипник для корпуса
  series: { type: DataTypes.STRING }, // серия
  standart: { type: DataTypes.STRING }, // ГОСТ, ISO
  bearing_type: { type: DataTypes.STRING }, // качения, скольжения
  roller_type: { type: DataTypes.STRING }, // шариковый, роликовый
  load_type: { type: DataTypes.STRING }, // радиальный, упорный
  row_count: { type: DataTypes.STRING }, // однорядный, двухрядный
  bearing_design: { type: DataTypes.STRING }, // сферический, миниатюрный, шарнирный
});

const BearingInfo = sequelize.define("bearing_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

Bearing.hasMany(BearingInfo, { as: "info" });
BearingInfo.belongsTo(Bearing);
