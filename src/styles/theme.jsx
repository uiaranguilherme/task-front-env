const createTheme = (theme) =>
  theme === "ligth"
    ? {
        primary: {
          main: "#FFFFFF",
          default: "#FFFFFF",
          button: "#2a5ada",
          background: "#FFFFFF",
          background2: "#fafefe",
          backgroundContrast: "#eeeeee",
          text: "#333333",
          subText: "#838383",
          icon: "#2b2d42",
          contrastColor: "rgba(1, 1, 1, 0.2)",
        },
        secundary: {
          main: "#E1E7FB",
          default: "#E1E7FB",
          button: "#2a5ada",
          background: "#F7F8FA",
          backgroundContrast: "#f0f0f0",
          text: "#333333",
          subText: "#838383",
          icon: "#2b2d42",
          contrastColor: "rgba(1, 1, 1, 0.2)",
        },
        messages: {
          error: "",
          success: "",
          info: "",
        },
      }
    : {};

export default createTheme;
