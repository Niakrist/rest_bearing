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
  price: { type: DataTypes.FLOAT },
  priceRvz: { type: DataTypes.FLOAT },
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
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  content: { type: DataTypes.TEXT },
  innerDiameter: { type: DataTypes.FLOAT },
  outerDiameter: { type: DataTypes.FLOAT },
  widthBearing: { type: DataTypes.FLOAT },
  weight: { type: DataTypes.STRING },
  new_product: { type: DataTypes.BOOLEAN },
  stock: { type: DataTypes.FLOAT },
  popular: { type: DataTypes.BOOLEAN },
  bearing_for_corpus: { type: DataTypes.STRING },
  corpus: { type: DataTypes.STRING },
  series: { type: DataTypes.STRING },
  bushing: { type: DataTypes.STRING },
  size: { type: DataTypes.STRING, allowNull: true },

  // Внешние ключи
  bearingDesignId: { type: DataTypes.INTEGER },
  bearingSealId: { type: DataTypes.INTEGER },
  bearingTypeId: { type: DataTypes.INTEGER },
  cornerId: { type: DataTypes.INTEGER },
  feature2Id: { type: DataTypes.INTEGER },
  featureId: { type: DataTypes.INTEGER },
  holeId: { type: DataTypes.INTEGER },
  innerRingId: { type: DataTypes.INTEGER },
  loadTypeId: { type: DataTypes.INTEGER },
  materialId: { type: DataTypes.INTEGER },
  outerRingId: { type: DataTypes.INTEGER },
  rollerTypeId: { type: DataTypes.INTEGER },
  rowCountId: { type: DataTypes.INTEGER },
  sealId: { type: DataTypes.INTEGER },
  sepId: { type: DataTypes.INTEGER },
  standartId: { type: DataTypes.INTEGER },
  bushingTypeId: { type: DataTypes.INTEGER },
  lubricationHoleId: { type: DataTypes.INTEGER },
  connectionId: { type: DataTypes.INTEGER },
});

const BearingInfo = sequelize.define("bearing_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

// Конструкция подшипника корпусный подшипник / сферический
const BearingDesign = sequelize.define("bearing_design", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип уплотнения подшипника Z / ZZ / RS / 2RS
const BearingSeal = sequelize.define("bearing_seal", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип подшипника качения / скольжения
const BearingType = sequelize.define("bearing_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Угол 12 / 26 / 32
const Corner = sequelize.define("corner", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Особенность
const Feature2 = sequelize.define("feature_2", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Особенность
const Feature = sequelize.define("feature", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Отверстие цилиндрическое / коническое
const Hole = sequelize.define("hole", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Особенности внутреннего кольца
const InnerRing = sequelize.define("inner_ring", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип нагрузки радиальный / упорный
const LoadType = sequelize.define("load_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Материал ШХ15 / Нержавеющий
const Material = sequelize.define("material", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Особенности наружного кольца
const OuterRing = sequelize.define("outer_ring", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип ролика шариковый / роликовый
const RollerType = sequelize.define("roller_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Количество рядов однорядный / двухрядный
const RowCount = sequelize.define("row_count", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Наличие заглушки открытый / закрытый
const Seal = sequelize.define("seal", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Сепаратор стальной / латунный
const Sep = sequelize.define("sep", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Стандарт ГОСТ / ISO
const Standart = sequelize.define("standart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип втулки: Скольжения / Качения
const BushingType = sequelize.define("bushing_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Смазное отверстие с канавкой для смазки на наружном кольце / с канавкой и отверстиями для смазки
const LubricationHole = sequelize.define("lubrication_hole", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Соединение
const Connection = sequelize.define("connection", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

/////////////////////////////
/////////////////////////////
/////////////////////////////

// Установка связей
Bearing.belongsTo(Seal, { foreignKey: "sealId" });
Bearing.belongsTo(BearingSeal, { foreignKey: "bearingSealId" });
Bearing.belongsTo(Sep, { foreignKey: "sepId" });
Bearing.belongsTo(Material, { foreignKey: "materialId" });
Bearing.belongsTo(Hole, { foreignKey: "holeId" });
Bearing.belongsTo(Corner, { foreignKey: "cornerId" });
Bearing.belongsTo(Feature, { foreignKey: "featureId" });
Bearing.belongsTo(Feature2, { as: "Feature2", foreignKey: "feature2Id" });
Bearing.belongsTo(Standart, { foreignKey: "standartId" });
Bearing.belongsTo(BearingType, { foreignKey: "bearingTypeId" });
Bearing.belongsTo(RollerType, { foreignKey: "rollerTypeId" });
Bearing.belongsTo(LoadType, { foreignKey: "loadTypeId" });
Bearing.belongsTo(RowCount, { foreignKey: "rowCountId" });
Bearing.belongsTo(BearingDesign, { foreignKey: "bearingDesignId" });
Bearing.belongsTo(InnerRing, { foreignKey: "innerRingId" });
Bearing.belongsTo(OuterRing, { foreignKey: "outerRingId" });
Bearing.belongsTo(BushingType, { foreignKey: "bushingTypeId" });
Bearing.belongsTo(LubricationHole, { foreignKey: "lubricationHoleId" });
Bearing.belongsTo(Connection, { foreignKey: "connectionId" });

Bearing.hasMany(BearingInfo, { as: "info" });
BearingInfo.belongsTo(Bearing);

export const models = {
  User,
  Bearing,
  BearingInfo,
  Seal,
  BearingSeal,
  Sep,
  Material,
  Hole,
  Corner,
  Feature,
  Feature2,
  Standart,
  BearingType,
  RollerType,
  LoadType,
  RowCount,
  BearingDesign,
  InnerRing,
  OuterRing,
  BushingType,
  LubricationHole,
  Connection,
};
