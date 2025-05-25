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
  weight: { type: DataTypes.STRING },
  new_product: { type: DataTypes.BOOLEAN },
  stock: { type: DataTypes.INTEGER },
  popular: { type: DataTypes.BOOLEAN },

  innerDiameter: { type: DataTypes.FLOAT },
  outerDiameter: { type: DataTypes.FLOAT },
  widthBearing: { type: DataTypes.FLOAT },

  // Внешние ключи
  sealId: { type: DataTypes.INTEGER },
  bearingSealId: { type: DataTypes.INTEGER },
  sepId: { type: DataTypes.INTEGER },
  materialId: { type: DataTypes.INTEGER },
  grooveId: { type: DataTypes.INTEGER },
  holeId: { type: DataTypes.INTEGER },
  cornerId: { type: DataTypes.INTEGER },
  featureId: { type: DataTypes.INTEGER },
  feature2Id: { type: DataTypes.INTEGER },
  // montageId: { type: DataTypes.INTEGER },
  bushingId: { type: DataTypes.INTEGER },
  corpusId: { type: DataTypes.INTEGER },
  bearingForCorpusId: { type: DataTypes.INTEGER },
  seriesId: { type: DataTypes.INTEGER },
  standartId: { type: DataTypes.INTEGER },
  bearingTypeId: { type: DataTypes.INTEGER },
  rollerTypeId: { type: DataTypes.INTEGER },
  loadTypeId: { type: DataTypes.INTEGER },
  rowCountId: { type: DataTypes.INTEGER },
  bearingDesignId: { type: DataTypes.INTEGER },
  innerRingId: { type: DataTypes.INTEGER },
  outerRingId: { type: DataTypes.INTEGER },
  grooveForBallsId: { type: DataTypes.INTEGER },
});

const BearingInfo = sequelize.define("bearing_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

// Наличие заглушки открытый / закрытый
const Seal = sequelize.define("seal", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Тип уплотнения подшипника Z / ZZ / RS / 2RS
const BearingSeal = sequelize.define("bearing_seal", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Сепаратор стальной / латунный
const Sep = sequelize.define("sep", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Материал ШХ15 / Нержавеющий
const Material = sequelize.define("material", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Канавка с канавкой на наружном кольце
const Groove = sequelize.define("groove", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Отверстие цилиндрическое / коническое
const Hole = sequelize.define("hole", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Угол 12 / 26 / 32
const Corner = sequelize.define("corner", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Особенность
const Feature = sequelize.define("feature", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Особенность
const Feature2 = sequelize.define("feature_2", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

// Монтаж
// const Montage = sequelize.define("montage", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, unique: true }
// });

// Втулка H311 / H312
const Bushing = sequelize.define("bushing", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Корпус FB204 / FB205
const Corpus = sequelize.define("corpus", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Подшипник для корпуса UC201 / UC202
const BearingForCorpus = sequelize.define("bearing_for_corpus", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Серия UCFB / GE
const Series = sequelize.define("series", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Стандарт ГОСТ / ISO
const Standart = sequelize.define("standart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип подшипника качения / скольжения
const BearingType = sequelize.define("bearing_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип ролика шариковый / роликовый
const RollerType = sequelize.define("roller_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Тип нагрузки радиальный / упорный
const LoadType = sequelize.define("load_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Количество рядов однорядный / двухрядный
const RowCount = sequelize.define("row_count", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Конструкция подшипника корпусный подшипник / сферический
const BearingDesign = sequelize.define("bearing_design", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Особенности внутреннего кольца
const InnerRing = sequelize.define("inner_ring", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Особенности наружного кольца
const OuterRing = sequelize.define("outer_ring", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Канавка для ввода шариков
const GrooveForBalls = sequelize.define("groove_for_balls", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Установка связей
Bearing.belongsTo(Seal, { foreignKey: "sealId" });
Bearing.belongsTo(BearingSeal, { foreignKey: "bearingSealId" });
Bearing.belongsTo(Sep, { foreignKey: "sepId" });
Bearing.belongsTo(Material, { foreignKey: "materialId" });
Bearing.belongsTo(Groove, { foreignKey: "grooveId" });
Bearing.belongsTo(Hole, { foreignKey: "holeId" });
Bearing.belongsTo(Corner, { foreignKey: "cornerId" });
Bearing.belongsTo(Feature, { foreignKey: "featureId" });
Bearing.belongsTo(Feature2, { as: "Feature2", foreignKey: "feature2Id" });

// Bearing.belongsTo(Montage, { foreignKey: 'montageId' });
Bearing.belongsTo(Bushing, { foreignKey: "bushingId" });
Bearing.belongsTo(Corpus, { foreignKey: "corpusId" });
Bearing.belongsTo(BearingForCorpus, { foreignKey: "bearingForCorpusId" });
Bearing.belongsTo(Series, { foreignKey: "seriesId" });
Bearing.belongsTo(Standart, { foreignKey: "standartId" });
Bearing.belongsTo(BearingType, { foreignKey: "bearingTypeId" });
Bearing.belongsTo(RollerType, { foreignKey: "rollerTypeId" });
Bearing.belongsTo(LoadType, { foreignKey: "loadTypeId" });
Bearing.belongsTo(RowCount, { foreignKey: "rowCountId" });
Bearing.belongsTo(BearingDesign, { foreignKey: "bearingDesignId" });
Bearing.belongsTo(InnerRing, { foreignKey: "innerRingId" });
Bearing.belongsTo(OuterRing, { foreignKey: "outerRingId" });
Bearing.belongsTo(GrooveForBalls, { foreignKey: "grooveForBallsId" });

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
  Groove,
  Hole,
  Corner,
  Feature,
  Feature2,
  Bushing,
  Corpus,
  BearingForCorpus,
  Series,
  Standart,
  BearingType,
  RollerType,
  LoadType,
  RowCount,
  BearingDesign,
  InnerRing,
  OuterRing,
  GrooveForBalls,
};
