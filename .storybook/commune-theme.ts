
import { create } from "@storybook/theming";

export default create({
    base: "dark",
    // brand logo
    brandTitle: "Commune",
    brandUrl: "",
    brandImage: "/full-logo.svg",

    // files logo colors
    colorPrimary: "#CD65DE",
    colorSecondary: "#AC92E0",

    // UI
    appBg: "#081924",
    appContentBg: "#102133",
    appPreviewBg: "#fafafa",
    appBorderColor: "#8392fb73",
    appBorderRadius: 4,

    // Text colors
    textColor: "#ffffff",
    textInverseColor: "#ffffff",

    // Toolbar default and active colors
    barTextColor: "#798186",
    barSelectedColor: "#AC92E0",
    barHoverColor: "#AC92E0",
    barBg: "#102133",

    // Form colors
    inputBg: "transparent",
    inputBorder: "#585C6D",
    inputTextColor: "#ffffff",
    inputBorderRadius: 2,
});