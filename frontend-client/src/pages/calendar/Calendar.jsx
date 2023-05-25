import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.scss";
import { useMemo } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);


export default function ReactBigCalendar() {
    const defaultDate = useMemo(() => new Date(), []);
    const [eventsData, setEventsData] = useState([])
    const [fac, setFac] = useState()
    const user = JSON.parse(localStorage.getItem("user"))
    const handleSelect = async ({ start, end , date }) => {
        const title = window.prompt("New Event name");
        console.log(start,end,date)
        axios.get("http://localhost:6969/api/admin/faculty", {
                email:user.email ,
            }).then((res) => {
                setFac(res.data.facultyId)
            })
        if (title) {
            const newEvent = {
                start : start,
                end : end,
                date : date,
                name : title,
                facultyId : fac,
                isStarred : false
            }
            axios.post("http://localhost:6969/api/admin/event",newEvent).then((res) => {
                console.log(res.data)
            }
            )
            
        }
        }
    return (
        <div className="calendar">
            <Sidebar />
            <div className="calendar-wrapper">
                <Navbar/>
                <Calendar
                    views={["day", "agenda", "work_week", "month"]}
                    selectable
                    localizer={localizer}
                    defaultDate={defaultDate}
                    defaultView="month"
                    events={eventsData}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "100vh", width: "80vw", marginLeft: "30px" }}
                    onSelectEvent={(deleteEvent) => {
                        const confirm = window.confirm(
                            `Are you sure you want to delete ${deleteEvent.title}`
                        );
                        if (confirm) {
                            setEventsData(eventsData.filter((event) => event !== deleteEvent));
                        }
                    }}
                    onDoubleClickEvent={(event) => {
                        const title = window.prompt("Change Event name", event.title);
                        if (title) {
                            setEventsData(
                                eventsData.map((e) => (e === event ? { ...event, title } : e))
                            );
                        }
                    }}
                    onSelectSlot={handleSelect}
                />
            </div>
        </div>
    );
}