import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import ClassIcon from "@mui/icons-material/Class";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Home } from "@mui/icons-material";
const Widget = ({ type }) => {
    let data ;

    const amount = 100;
    const diff = 20;

    switch (type) {
        case "faculty":
        data = {
        title: "FACULTY",
        link: "See all Faculties",
        icon: (<PersonOutlinedIcon className="icon" style={{color: "crimson",backgroundColor: "rgba(255, 0, 0, 0.2)",}}/>),};
    break;
    case "courses":
        data = {
        title: "COURSES",
        link: "View all Courses",
        icon: (
        <MenuBookIcon className="icon" style={{backgroundColor: "rgba(218, 165, 32, 0.2)",color: "goldenrod"}}/>),};
    break;
    case "classes":
        data = {
        title: "CLASSES",
        link: "View all Classes",
        icon: (
        <ClassIcon className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>),};
    break;
    case "attendance":
        data = {
        title: "ATTENDANCE",
        link: "View all Attendance Records",
        icon: (
        <ViewListOutlinedIcon className="icon" style={{backgroundColor: "rgba(128, 0, 128, 0.2)",color: "purple",}}/>),};
    break;
    default:
    break;
}

return (
<div className="widget">
    <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span>
        <a href={<Home/>} className="link">
            <span className="link">{data.link}</span>
        </a>
    </div>
    <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
        </div>
        {data.icon}
    </div>
</div>
);
};

export default Widget;
