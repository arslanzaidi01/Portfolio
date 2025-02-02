function changeStyle() {

    var resume = document.getElementById("resume");
    resume.style.background = "lightblue";
    resume.style.display = "flex";
    resume.style.justifyContent = "center";
    resume.style.alignItems = "center";
    resume.style.minHeight = "100vh";

    var container = document.getElementById("container");
    container.style.position = "relative";
    container.style.width = "100%";
    container.style.maxWidth = "1000px";
    container.style.minHeight = "1000px";
    container.style.background = "#fff";
    container.style.margin = "50px";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr 2fr";
    container.style.boxShadow = "0px 35px 55px rgba(0,0,0,0.1)";

    var ProfileText = document.getElementById("ProfileText");
    ProfileText.style.position = "relative";
    ProfileText.style.flexDirection = "column";
    ProfileText.style.alignItems = "center";
    ProfileText.style.paddingBottom = "20px";
    ProfileText.style.borderBottom = "1px solid rgba(255,255,255,0.2)";

    var imgBx = document.getElementById("imgBx");
    imgBx.style.position = "relative";
    imgBx.style.width = "150px"; // Updated width for better visibility
    imgBx.style.height = "150px"; // Updated height for better visibility
    imgBx.style.borderRadius = "50%";
    imgBx.style.overflow = "hidden"; // Corrected "overFlow" to "overflow"

    var imgId = document.getElementById("imgId");
    imgId.style.position = "absolute";
    imgId.style.top = "0";
    imgId.style.left = "0";
    imgId.style.width = "100%"; // Adjusted to match container
    imgId.style.height = "100%"; // Adjusted to match container
    imgId.style.objectFit = "cover";

    var h2 = document.getElementById("h2");
    h2.style.color = "rgba(20, 16, 16, 0.2)";
    h2.style.fontSize = "1.5em";
    h2.style.marginTop = "20px";
    h2.style.textTransform = "uppercase";
    h2.style.textAlign = "center";
    h2.style.fontWeight = "600";
    h2.style.lineHeight = "1.4em";

    var left_Side = document.getElementById("left_Side"); // Corrected to use getElementById
    left_Side.style.position = "relative";
    left_Side.style.background = "#003147";
    left_Side.style.padding = "40px";

    var contactInfo = document.getElementById("contactInfo"); // Corrected to use getElementById
    contactInfo.style.paddingTop = "40px";

    var title = document.getElementById("title"); // Corrected to use getElementById
    title.style.color = "#fff";
    title.style.textTransform = "uppercase";
    title.style.fontWeight = "600";
    title.style.letterSpacing = "1px";
    title.style.marginBottom = "20px";

    var education = document.getElementById("education");

    var right_Side = document.getElementById("right_Side"); // Corrected to use getElementById
    right_Side.style.position = "relative";
    right_Side.style.background = "#fff";
    right_Side.style.padding = "40px";

    var about = document.getElementById("about"); // Corrected to use getElementById
    about.style.marginBottom = "50px";

    var title2 = document.getElementById("title2"); // Corrected to use getElementById
    title2.style.color = "#003147";
    title2.style.textTransform = "uppercase";
    title2.style.letterSpacing = "1px";
    title2.style.marginBottom = "10px";

    var skill = document.getElementById("skill"); // Corrected to use getElementById
    skill.style.position = "relative";
    skill.style.width = "100%";
    skill.style.display = "grid";
    skill.style.gridTemplateColumns = "150px 1fr";
    skill.style.justifyContent = "center";
    skill.style.alignItems = "center";
}
