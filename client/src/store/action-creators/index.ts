import * as DeviceActionCreators from "./deviceAC";
import * as UserActionCreators from "./userAC";

export default {
  ...DeviceActionCreators,
  ...UserActionCreators,
};
