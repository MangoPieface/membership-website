/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type NavProps = React.PropsWithChildren<Partial<FlexProps> & {
    username?: String;
    avatar?: String;
    authText?: String;
    handleAuth?: (event: SyntheticEvent) => void;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;
