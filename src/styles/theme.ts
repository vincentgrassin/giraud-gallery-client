export const colors = {
    babyBlue:"#88CCF1",
    columbiaBlue:"#C1DFF0",
    munsellBlue:"#3587A4",
    metallicBlue:"#2D848A",
    sunglowYellow:"#FDCA40",
    jetGrey:"#353535",
    xiketicBlack:"#0D0106",
    lightGrey:"#E8E8E8",
    white: "#ffffff"
}

export const fontSize = {
    fontSizeMedium:"1rem",
}

export const spacing = {   
}

export const theme = Object.entries({
    ...colors,
    ...fontSize,
    ...spacing
})
.map(([key, value]) =>  `--${key}:${value}`)
.join(";");
