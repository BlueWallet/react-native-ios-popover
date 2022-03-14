//
//  RNIPopoverError.swift
//  react-native-ios-popover
//
//  Created by Dominic Go on 3/11/22.
//

import Foundation


class RNIPopoverGenericError: RNIBaseError<RNIGenericErrorCodes> {
  
  init(
    code: RNIGenericErrorCodes,
    message: String? = nil,
    debug: String? = nil
  ) {
    super.init(
      code: code,
      domain: "react-native-ios-popover",
      message: message,
      debug: debug
    );
  };
};