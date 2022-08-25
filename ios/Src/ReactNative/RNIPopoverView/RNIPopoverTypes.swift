//
//  RCTPopoverTypes.swift
//  IosPopoverExample
//
//
//  Created by Dominic Go on 12/6/20.

import Foundation

enum RNIPopoverSize {
  case INHERIT;
  case STRETCH;
  case CUSTOM(width: CGFloat, height: CGFloat);
  
  static let stringMap: [String: RNIPopoverSize] = [
    "INHERIT": .INHERIT,
    "STRETCH": .STRETCH,
  ];
  
  init?(string: String){
    guard let match = Self.stringMap[string.uppercased()]
    else { return nil };
    
    self = match;
  };
  
  init?(dict: NSDictionary){
    guard let type = dict["type"] as? String
    else { return nil };
    
    self = Self.stringMap[type.uppercased()] ?? {
      guard let width  = dict["width" ] as? CGFloat,
            let height = dict["height"] as? CGFloat
      else { return .INHERIT };
      
      return .CUSTOM(width: width, height: height);
    }();
  };
};
