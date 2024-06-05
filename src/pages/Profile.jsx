import React, { useState, useMemo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  Eventcalendar,
  Datepicker,
  Dropdown,
  Input,
  Popup,
  Segmented,
  SegmentedGroup,
  setOptions,
  Snackbar,
  Switch,
  Textarea,
  localeRu,
} from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import moment from "moment-timezone";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

setOptions({
  locale: localeRu,
  theme: "ios",
  themeVariant: "light",
});

const now = new Date();

const defaultEvents = [
  {
    id: 1,
    start: "2024-06-08T13:00",
    end: "2024-06-08T13:45",
    title: "Английский язык",
    description: "",
    allDay: false,
    bufferBefore: 15,
    free: true,
    color: "#009788",
  },
  {
    id: 2,
    start: "2024-06-04T15:00",
    end: "2024-06-04T16:00",
    title: "Русский язык",
    description: "",
    allDay: false,
    bufferBefore: 30,
    free: false,
    color: "#ff9900",
  },
  {
    id: 3,
    start: "2024-06-03T18:00",
    end: "2024-06-03T22:00",
    title: "Математика",
    description: "",
    allDay: false,
    bufferBefore: 60,
    free: true,
    color: "#3f51b5",
  },
];

export function Profile() {
  const [showChart, setShowChart] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [myEvents, setMyEvents] = useState(defaultEvents);
  const [tempEvent, setTempEvent] = useState(null);
  const [undoEvent, setUndoEvent] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [start, startRef] = useState(null);
  const [end, endRef] = useState(null);
  const [popupEventTitle, setTitle] = useState("");
  const [popupEventDescription, setDescription] = useState("");
  const [popupEventAllDay, setAllDay] = useState(true);
  const [popupTravelTime, setTravelTime] = useState(0);
  const [popupEventDate, setDate] = useState([]);
  const [popupEventStatus, setStatus] = useState("busy");
  const [mySelectedDate, setSelectedDate] = useState(now);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorAnchor, setColorAnchor] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [tempColor, setTempColor] = useState("");
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const colorPicker = useRef(null); // Define a ref for colorPicker

  const handleShowCalendar = () => {
    setShowCalendar(true);
    setShowChart(false);
  };

  const handleShowChart = () => {
    setShowChart(true);
    setShowCalendar(false);
  };

  const data = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
    datasets: [
      {
        label: "Посещаемость",
        data: [7, 9, 10, 6, 8, 10],
        backgroundColor: ["rgba(219, 169, 111, 1)"],
        borderColor: ["rgba(219, 169, 111, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const myView = useMemo(() => ({ calendar: { labels: true } }), []);
  const colors = []; // Define colors array

  const colorButtons = useMemo(
    () => [
      "cancel",
      {
        text: "Set",
        keyCode: "enter",
        handler: () => {
          setSelectedColor(tempColor);
          setColorPickerOpen(false);
        },
        cssClass: "mbsc-popup-button-primary",
      },
    ],
    [tempColor]
  );

  const colorResponsive = useMemo(
    () => ({
      medium: {
        display: "anchored",
        touchUi: false,
        buttons: [],
      },
    }),
    []
  );

  const snackbarButton = useMemo(
    () => ({
      action: () => {
        setMyEvents((prevEvents) => [...prevEvents, undoEvent]);
      },
      text: "Undo",
    }),
    [undoEvent]
  );
  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  const saveEvent = useCallback(() => {
    const newEvent = {
      id: tempEvent.id,
      title: popupEventTitle,
      description: popupEventDescription,
      start: popupEventDate[0],
      end: popupEventDate[1],
      allDay: popupEventAllDay,
      bufferBefore: popupTravelTime,
      status: popupEventStatus,
      color: tempEvent.color,
    };
    if (isEdit) {
      const index = myEvents.findIndex((x) => x.id === tempEvent.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, newEvent);
      setMyEvents(newEventList);
    } else {
      setMyEvents([...myEvents, newEvent]);
    }
    setSelectedDate(popupEventDate[0]);

    setOpen(false);
  }, [
    isEdit,
    myEvents,
    popupEventAllDay,
    popupEventDate,
    popupEventDescription,
    popupEventStatus,
    popupEventTitle,
    popupTravelTime,
    tempEvent,
  ]);

  const deleteEvent = useCallback(
    (event) => {
      setMyEvents(myEvents.filter((item) => item.id !== event.id));
      setUndoEvent(event);
      setTimeout(() => {
        setSnackbarOpen(true);
      });
    },
    [myEvents]
  );

  const onSelectedDateChange = useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  const loadPopupForm = useCallback((event) => {
    setTitle(event.title);
    setDescription(event.description);
    setDate([event.start, event.end]);
    setAllDay(event.allDay || false);
    setTravelTime(event.bufferBefore || 0);
    setStatus(event.status || "busy");
    setSelectedColor(event.color || "");
  }, []);

  // handle popup form changes

  const titleChange = useCallback((ev) => {
    setTitle(ev.target.value);
  }, []);

  const descriptionChange = useCallback((ev) => {
    setDescription(ev.target.value);
  }, []);

  const allDayChange = useCallback((ev) => {
    setAllDay(ev.target.checked);
  }, []);

  const travelTimeChange = useCallback((ev) => {
    setTravelTime(ev.target.value);
  }, []);

  const dateChange = useCallback((args) => {
    setDate(args.value);
  }, []);

  const statusChange = useCallback((ev) => {
    setStatus(ev.target.value);
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteEvent(tempEvent);
    setOpen(false);
  }, [deleteEvent, tempEvent]);

  const onEventClick = useCallback(
    (args) => {
      setEdit(true);
      setTempEvent({ ...args.event });

      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventCreated = useCallback(
    (args) => {
      setEdit(false);
      setTempEvent(args.event);

      loadPopupForm(args.event);
      setAnchor(args.target);

      setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventDeleted = useCallback(
    (args) => {
      deleteEvent(args.event);
    },
    [deleteEvent]
  );

  const onEventUpdated = useCallback(() => {}, []);

  const controls = useMemo(
    () => (popupEventAllDay ? ["date"] : ["datetime"]),
    [popupEventAllDay]
  );
  const datepickerResponsive = useMemo(
    () =>
      popupEventAllDay
        ? {
            medium: {
              controls: ["calendar"],
              touchUi: false,
            },
          }
        : {
            medium: {
              controls: ["calendar", "time"],
              touchUi: false,
            },
          },
    [popupEventAllDay]
  );
  const headerText = useMemo(
    () => (isEdit ? "Редактировать урок" : "Редактировать урок"),
    [isEdit]
  );
  const popupButtons = useMemo(() => {
    if (isEdit) {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Сохранить",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    } else {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Сохранить",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    }
  }, [isEdit, saveEvent]);

  const popupResponsive = useMemo(
    () => ({
      medium: {
        display: "anchored",
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    }),
    []
  );

  const onClose = useCallback(() => {
    if (!isEdit) {
      setMyEvents([...myEvents]);
    }
    setOpen(false);
  }, [isEdit, myEvents]);

  const selectColor = useCallback((color) => {
    setTempColor(color);
  }, []);

  const openColorPicker = useCallback(
    (ev) => {
      selectColor(selectedColor || "");
      setColorAnchor(ev.currentTarget);
      setColorPickerOpen(true);
    },
    [selectColor, selectedColor]
  );

  const changeColor = useCallback(
    (ev) => {
      const color = ev.currentTarget.getAttribute("data-value");
      selectColor(color);
      if (!colorPicker.current.s.buttons.length) {
        setSelectedColor(color);
        setColorPickerOpen(false);
      }
    },
    [selectColor, setSelectedColor]
  );
  return (
    <div>
      <div className="pb-10">
        <header className="w-full grid grid-cols-3 items-center p-5 mt-14">
          <Link to="/" className="w-[140px] rounded-md ml-8">
            <Button
              variant="text"
              color="inherit"
              style={{ textTransform: "none", borderRadius: "20px" }}
            >
              Назад
            </Button>
          </Link>
          <h1 className="text-5xl">Личный кабинет</h1>
          <a
            className="flex justify-end items-center"
            href="https://vk.com/rinatkp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10 rounded-md ml-8"
              src="/img/bell.svg"
              alt=""
            />
          </a>
        </header>
        <div className="w-full grid grid-cols-10 items-center p-5 mt-14">
          <div className="col-span-3 ml-28">
            <img src="/img/student.jpg" width="219" height="275" alt="" />
            <div className="mt-3 text-xl">
              <p>Волкова Мария</p>
            </div>
            <div className="mt-7">
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                style={{
                  textTransform: "none",
                  borderRadius: "20px",
                  width: "219px",
                }}
                onClick={handleShowCalendar}
              >
                расписание
              </Button>
            </div>
            <div className="mt-7">
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                style={{
                  textTransform: "none",
                  borderRadius: "20px",
                  width: "219px",
                }}
                onClick={handleShowChart}
              >
                посещаемость
              </Button>
            </div>
            <div className="mt-7">
              <Link to="/editprof" className="w-[140px]">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="medium"
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    width: "219px",
                  }}
                >
                  редактировать профиль
                </Button>
              </Link>
            </div>
            <div className="mt-7">
              <Link to="/" className="w-[140px]">
                <Button
                  variant="outlined"
                  color="inherit"
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    width: "219px",
                  }}
                >
                  главная страница
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-7">
            {showChart && (
              <div className="chart">
                <Bar data={data} options={options} />
              </div>
            )}
            {showCalendar && (
              <>
                <Eventcalendar
                  view={myView}
                  data={myEvents}
                  clickToCreate="double"
                  dragToCreate={true}
                  dragToMove={true}
                  dragToResize={true}
                  selectedDate={mySelectedDate}
                  onSelectedDateChange={onSelectedDateChange}
                  onEventClick={onEventClick}
                  onEventCreated={onEventCreated}
                  onEventDeleted={onEventDeleted}
                  onEventUpdated={onEventUpdated}
                />
                <Popup
                  display="bottom"
                  fullScreen={true}
                  contentPadding={false}
                  headerText={headerText}
                  anchor={anchor}
                  buttons={popupButtons}
                  isOpen={isOpen}
                  onClose={onClose}
                  responsive={popupResponsive}
                >
                  <div className="mbsc-form-group">
                    <Input
                      label="Название"
                      value={popupEventTitle}
                      onChange={titleChange}
                    />
                    <Textarea
                      label="Описание"
                      value={popupEventDescription}
                      onChange={descriptionChange}
                    />
                  </div>
                  <div className="mbsc-form-group">
                    <Switch
                      label="Весь день"
                      checked={popupEventAllDay}
                      onChange={allDayChange}
                    />
                    <Input ref={startRef} label="Начало" />
                    <Input ref={endRef} label="Конец" />
                    {!popupEventAllDay && (
                      <div id="travel-time-group">
                        <Dropdown
                          label="Длительность"
                          value={popupTravelTime}
                          onChange={travelTimeChange}
                        >
                          <option value="30">30 минут</option>
                          <option value="60">1 час</option>
                          <option value="90">1.5 часа</option>
                        </Dropdown>
                      </div>
                    )}
                    <Datepicker
                      select="range"
                      controls={controls}
                      touchUi={true}
                      startInput={start}
                      endInput={end}
                      showRangeLabels={false}
                      responsive={datepickerResponsive}
                      onChange={dateChange}
                      value={popupEventDate}
                    />

                    {isEdit ? (
                      <div className="mbsc-button-group">
                        <Button
                          className="mbsc-button-block"
                          color="danger"
                          variant="outline"
                          onClick={onDeleteClick}
                        >
                          Отказаться
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </Popup>
                <Popup
                  display="bottom"
                  contentPadding={false}
                  showArrow={false}
                  showOverlay={false}
                  anchor={colorAnchor}
                  isOpen={colorPickerOpen}
                  buttons={colorButtons}
                  responsive={colorResponsive}
                  ref={colorPicker}
                >
                  <div className="crud-color-row">
                    {colors.map((color, index) =>
                      index < 5 ? (
                        <div
                          key={index}
                          onClick={changeColor}
                          className={
                            "crud-color-c " +
                            (tempColor === color ? "selected" : "")
                          }
                          data-value={color}
                        >
                          <div
                            className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
                            style={{ background: color }}
                          ></div>
                        </div>
                      ) : null
                    )}
                  </div>
                  <div className="crud-color-row">
                    {colors.map((color, index) =>
                      index >= 5 ? (
                        <div
                          key={index}
                          onClick={changeColor}
                          className={
                            "crud-color-c " +
                            (tempColor === color ? "selected" : "")
                          }
                          data-value={color}
                        >
                          <div
                            className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
                            style={{ background: color }}
                          ></div>
                        </div>
                      ) : null
                    )}
                  </div>
                </Popup>
                <Snackbar
                  isOpen={isSnackbarOpen}
                  message="Event deleted"
                  button={snackbarButton}
                  onClose={handleSnackbarClose}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
