import BackArrowIcon from "./pack/BackArrowIcon";
import Bell2Icon from "./pack/BellI2con";
import BellIcon from "./pack/BellIcon";
import BloodBagIcon from "./pack/BloodBagIcon";
import BloodDropIcon from "./pack/BloodDropIcon";
import CalendarIcon from "./pack/CalendarIcon";
import CalendarTickIcon from "./pack/CalendarTickIcon";
import CategoryIcon from "./pack/CategoryIcon";
import ChatIcon from "./pack/ChatIcon";
import ChevronLeftFilledIcon from "./pack/ChevronLeftFilledIcon";
import ChevronRightIcon from "./pack/ChevronRightIcon";
import CholesterolIcon from "./pack/CholesterolIcon";
import DownloadIcon from "./pack/DownloadIcon";
import EditIcon from "./pack/EditIcon";
import ExerciseIcon from "./pack/ExerciseIcon";
import Eye2CloseIcon from "./pack/Eye2Close";
import Eye2OpenIcon from "./pack/Eye2Open";
import EyeOpenIcon from "./pack/EyeOpenIcon";
import FirstAidKitIcon from "./pack/FirstAidKitIcon";
import FolderIcon from "./pack/FolderIcon";
import FootprintsIcon from "./pack/FootprintsIcon";
import HealthPassportIcon from "./pack/HealthPassportIcon";
import HeartbeatIcon from "./pack/HeartbeatIcon";
import HistoryOutlineIcon from "./pack/HistoryOutlineIcon";
import HospitalIcon from "./pack/HospitalIcon";
import KemChatIcon from "./pack/KemChatIcon";
import LocationIcon from "./pack/LocationIcon";
import LoginIcon from "./pack/LoginIcon";
import MenuIcon from "./pack/MenuIcon";
import NavigationIcon from "./pack/NavigationIcon";
import PillIcon from "./pack/PillIcon";
import PlusIcon from "./pack/PlusIcon";
import PregnancyOutlineIcon from "./pack/PregnancyOutlineIcon";
import PrescriptionIcon from "./pack/PrescriptionIcon";
import RadarIcon from "./pack/RadarIcon";
import SearchIcon from "./pack/SearchIcon";
import SettingsIcon from "./pack/SettingsIcon";
import ShareIcon from "./pack/ShareIcon";
import SparkleIcon from "./pack/Sparkle";
import StatusIndicatorIcon from "./pack/StatusIndicatorIcon";
import StethoscopeIcon from "./pack/StethoscopeIcon";
import SubscriptionIcon from "./pack/SubscriptionIcon";
import TabIcon from "./pack/TabIcon";
import TargetIcon from "./pack/TargetIcon";
import TestTubeIcon from "./pack/TestTubeIcon";
import TickCircleIcon from "./pack/TickCircleIcon";
import UserIcon from "./pack/UserIcon";
import WaistCircumferenceIcon from "./pack/WaistCircumferenceIcon";
import WeightIcon from "./pack/WeightIcon";

const iconPack = {
  heartbeat: HeartbeatIcon,
  pill: PillIcon,
  "eye-open": EyeOpenIcon,
  footprints: FootprintsIcon,
  hospital: HospitalIcon,
  "first-aid-kit": FirstAidKitIcon,
  prescription: PrescriptionIcon,
  "test-tube": TestTubeIcon,
  category: CategoryIcon,
  "calendar-tick": CalendarTickIcon,
  chat: ChatIcon,
  "kem-chat": KemChatIcon,
  navigation: NavigationIcon,
  bell: BellIcon,
  subscription: SubscriptionIcon,
  radar: RadarIcon,
  menu: MenuIcon,
  login: LoginIcon,
  search: SearchIcon,
  calendar: CalendarIcon,
  settings: SettingsIcon,
  user: UserIcon,
  plus: PlusIcon,
  edit: EditIcon,
  "health-passport": HealthPassportIcon,
  "chevron-left-filled": ChevronLeftFilledIcon,
  "chevron-right-icon": ChevronRightIcon,
  sparkle: SparkleIcon,
  tab: TabIcon,
  "tick-circle": TickCircleIcon,
  share: ShareIcon,
  download: DownloadIcon,
  folder: FolderIcon,
  "status-indicator": StatusIndicatorIcon,
  weight: WeightIcon,
  "blood-bag": BloodBagIcon,
  "blood-drop": BloodDropIcon,
  cholesterol: CholesterolIcon,
  exercise: ExerciseIcon,
  stethoscope: StethoscopeIcon,
  "waist-circumference": WaistCircumferenceIcon,
  "pregnancy-outline": PregnancyOutlineIcon,
  "history-outline": HistoryOutlineIcon,
  target: TargetIcon,
  "bell-2": Bell2Icon,
  "eye-2-Open": Eye2OpenIcon,
  "eye-2-Close": Eye2CloseIcon,
  location: LocationIcon,
  "back-arrow": BackArrowIcon,
};

export { iconPack };

export type TIconPack = keyof typeof iconPack;

export const iconNames = Object.keys(iconPack) as TIconPack[];
