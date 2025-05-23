import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

// Создаем промежуточные таблицы для связей many-to-many
const BearingStandart = sequelize.define("bearing_standart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BearingBearingType = sequelize.define("bearing_bearing_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BearingRollerType = sequelize.define("bearing_roller_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BearingLoadType = sequelize.define("bearing_load_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BearingRowCount = sequelize.define("bearing_row_count", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BearingBearingDesign = sequelize.define("bearing_bearing_design", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Bearing = sequelize.define("bearing", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id1c: { type: DataTypes.STRING },
  id1cRvz: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
  priceRvz: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  quantityRvz: { type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  group: { type: DataTypes.STRING },
  for_img: { type: DataTypes.STRING },
  brand: { type: DataTypes.STRING },
  analog: { type: DataTypes.STRING },
  analogUrl: { type: DataTypes.STRING },
  images: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
  innerDiameter: { type: DataTypes.STRING },
  outerDiameter: { type: DataTypes.STRING },
  widthBearing: { type: DataTypes.STRING },
  weight: { type: DataTypes.STRING },
  new_product: { type: DataTypes.BOOLEAN },
  stock: { type: DataTypes.INTEGER },
  popular: { type: DataTypes.BOOLEAN },
  seal: { type: DataTypes.STRING },
  bearing_seal: { type: DataTypes.STRING },
  sep: { type: DataTypes.STRING },
  material: { type: DataTypes.STRING },
  groove: { type: DataTypes.STRING },
  inner_ring: { type: DataTypes.STRING },
  outer_ring: { type: DataTypes.STRING },
  groove_for_balls: { type: DataTypes.STRING },
  hole: { type: DataTypes.STRING },
  corner: { type: DataTypes.STRING },
  feature: { type: DataTypes.STRING },
  feature_2: { type: DataTypes.STRING },
  montage: { type: DataTypes.STRING },
  bushing: { type: DataTypes.STRING },
  corpus: { type: DataTypes.STRING },
  bearing_for_corpus: { type: DataTypes.STRING },
  series: { type: DataTypes.STRING },
});

const BearingInfo = sequelize.define("bearing_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const Standart = sequelize.define("standart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const BearingType = sequelize.define("bearing_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: false, allowNull: false },
});

const RollerType = sequelize.define("roller_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const LoadType = sequelize.define("load_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const RowCount = sequelize.define("row_count", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const BearingDesign = sequelize.define("bearing_design", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Определяем связи belongsToMany
Bearing.belongsToMany(Standart, { through: BearingStandart });
Standart.belongsToMany(Bearing, { through: BearingStandart });

Bearing.belongsToMany(BearingType, { through: BearingBearingType });
BearingType.belongsToMany(Bearing, { through: BearingBearingType });

Bearing.belongsToMany(RollerType, { through: BearingRollerType });
RollerType.belongsToMany(Bearing, { through: BearingRollerType });

Bearing.belongsToMany(LoadType, { through: BearingLoadType });
LoadType.belongsToMany(Bearing, { through: BearingLoadType });

Bearing.belongsToMany(RowCount, { through: BearingRowCount });
RowCount.belongsToMany(Bearing, { through: BearingRowCount });

Bearing.belongsToMany(BearingDesign, { through: BearingBearingDesign });
BearingDesign.belongsToMany(Bearing, { through: BearingBearingDesign });

Bearing.hasMany(BearingInfo, { as: "info" });
BearingInfo.belongsTo(Bearing);

export {
  User,
  Bearing,
  BearingInfo,
  Standart,
  BearingType,
  RollerType,
  LoadType,
  RowCount,
  BearingDesign,
  BearingStandart,
  BearingBearingType,
  BearingRollerType,
  BearingLoadType,
  BearingRowCount,
  BearingBearingDesign,
};
