
const createTheme = (theme) => (
    theme === 'ligth' ? ({
        red:  "red",
        Card : "#FFFFFF",
        Background : "#E1E7FB",
        Button : "#2a5ada",
        Marcation : "#99AFF2",
        iconColor: "#2b2d42",
        toDo : "#C88638",
        doing : "#C83838",
        done: "#5DC838",
        link: "#2a5ada",
        borderButton: "#2a5ada",
        hoverButtonColor: "#eeeeee",
        borderColor: "rgba(1, 1, 1, 0.2)",
        avatarColor: "#8d99ae",
        avatarFontColor: "rgb(229, 229, 229)",
        headerColor: "#ffffff",
        subHeaderBackgroundColor: "#FFFFFF",
        subParagrafColor: "#adb5bd",
        menuBarBackgroundColor: "#fafbfd" 
    })
    : ({

    })
)

export default createTheme