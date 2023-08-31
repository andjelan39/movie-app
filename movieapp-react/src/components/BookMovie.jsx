import React from "react";
import "../style/Login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const BookMovie = ({ reloadBookings, refreshBookings }) => {
  let navigate = useNavigate();
  let { id } = useParams();

  const [inputErrorList, setInputErrorList] = useState({});

  const [booking, setBooking] = useState({
    showtime_id: id,
    ticket_qty: "",
  });

  const [showtime, setShowtime] = useState();
  useEffect(() => {
    if (showtime == null) {
      axios.get(`http://127.0.0.1:8000/api/showtimes/${id}`).then((res) => {
        console.log(res.data.showtime);
        setShowtime(res.data.showtime);
      });
    }
  }, [id]);

  const handleInput = (e) => {
    e.persist();
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const bookMovie = (e) => {
    e.preventDefault();

    const newBooking = {
      showtime_id: booking.showtime_id,
      ticket_qty: booking.ticket_qty,
    };

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/bookings",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },

      data: newBooking,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.success == true) {
          reloadBookings();
          refreshBookings();
          swal("Success!", "Movie showtime booked successfully!", "success");
          navigate("/movies");
        }
      })
      .catch(function (error) {
        /*if (error.response) {
          if (error.response.status == 422) {
            setInputErrorList(error.response.data.errors);
          }
        }*/
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <div className="container">
        <h1>Book Showtime</h1>
        <div className="login d-flex justify-content-center">
          <div className="form_div">
            <div className="row justify-content-center align-items-center inner-row">
              <div className="col-lg-12 col-md-8">
                <div className="form-box p-md-5 p-3">
                  <form onSubmit={bookMovie}>
                    <div className="form-outline form-white mb-2">
                      <label className="bg-transparent" htmlFor="text">
                        Showtime
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm input_field"
                        placeholder="Movie title"
                        id="showtime_id"
                        name="showtime_id"
                        value={booking.showtime_id}
                        style={{ height: 75 + "px", color: "#edf0f1" }}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-outline form-white mb-2">
                      <label className="bg-transparent" htmlFor="text">
                        Ticket Quantity
                      </label>
                      <select
                        type="text"
                        className="form-control form-control-sm input_field"
                        placeholder="Enter movie slug"
                        id="ticket_qty"
                        name="ticket_qty"
                        value={booking.ticket_qty}
                        style={{
                          height: 75 + "px",
                          color: "#edf0f1",
                          marginLeft: 0 + "px",
                          fontSize: 22 + "px",
                          paddingLeft: 25 + "px",
                          backgroundColor: "#161a34",
                        }}
                        onChange={handleInput}
                      >
                        <option
                          disabled={true}
                          value=""
                          style={{
                            backgroundColor: "#DFDCDF",
                          }}
                        >
                          Select ticket quantity
                        </option>
                        <option
                          value="1"
                          style={{
                            backgroundColor: "#DFDCDF",
                          }}
                        >
                          1
                        </option>
                        <option
                          value="2"
                          style={{
                            backgroundColor: "#DFDCDF",
                          }}
                        >
                          2
                        </option>
                        <option
                          value="3"
                          style={{
                            backgroundColor: "#DFDCDF",
                          }}
                        >
                          3
                        </option>
                      </select>
                    </div>
                    <div className="mt-3">
                      <button type="submit" name="addBtn">
                        BOOK
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMovie;
