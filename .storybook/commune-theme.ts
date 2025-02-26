
import { create } from "@storybook/theming";

export default create({
    base: "dark",
    // brand logo
    brandTitle: "Commune",
    brandUrl: "",
    brandImage: "/full-logo.svg",

    // files logo colors
    colorPrimary: "#CD65DE",
    colorSecondary: "#744ACC",

    // UI
    appBg: "#1E1E1E",
    appContentBg: "#1E1E1E",
    appPreviewBg: "#fafafa",
    appBorderColor: "#8392fb73",
    appBorderRadius: 4,

    // Text colors
    textColor: "#ffffff",
    textInverseColor: "#ffffff",

    // Toolbar default and active colors
    barTextColor: "#798186",
    barSelectedColor: "#744ACC",
    barHoverColor: "#744ACC",
    barBg: "#1E1E1E",

    // Form colors
    inputBg: "white",
    inputBorder: "#585C6D",
    inputTextColor: "#000000",
    inputBorderRadius: 2,
});
