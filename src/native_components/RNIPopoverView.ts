import { requireNativeComponent, Platform, ViewProps, HostComponent, View } from 'react-native';

import type { PopoverArrowDirections, PopoverSizeConfig } from '../types/PopoverRelatedTypes';
import type { OnPopoverDidHideEvent, OnPopoverWillShowEvent, OnPopoverWillHideEvent, OnPopoverDidShowEvent, OnPopoverDidHideViaTapEvent, OnPopoverWillHideViaTapEvent, OnPopoverDidAttemptToDismissEvent } from '../types/PopoverViewEvents';

// TODO: Add type annotation - Remove `any` type usage
export type RNIPopoverViewProps = ViewProps & {
  popoverBackgroundColor?: number;
  permittedArrowDirections?: Array<PopoverArrowDirections>;
  popoverSize?: PopoverSizeConfig;

  popoverShouldDismiss?: boolean;
  popoverCanOverlapSourceViewRect?: boolean;

  onPopoverDidHide?: OnPopoverDidHideEvent;
  onPopoverWillShow?: OnPopoverWillShowEvent;
  onPopoverWillHide?: OnPopoverWillHideEvent;
  onPopoverDidShow?: OnPopoverDidShowEvent;
  onPopoverDidHideViaTap?: OnPopoverDidHideViaTapEvent;
  onPopoverWillHideViaTap?: OnPopoverWillHideViaTapEvent;
  onPopoverDidAttemptToDismiss?: OnPopoverDidAttemptToDismissEvent;
};

const viewName = 'RCTPopoverView';

/**
 * Do not use `RNIContextMenuView` if platform is not iOS.
 */
export const RNIPopoverView: HostComponent<RNIPopoverViewProps> =
  Platform.select({
    ios: () => requireNativeComponent(viewName) as any,
    default: () => View,
  })();
