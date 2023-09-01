import React from "react";
import $ from "jquery";
import "../style/Dashboard.css";
import "datatables.net-dt/css/jquery.dataTables.css";
import { Link } from "react-router-dom";

const BookingsDataTable = ({bookings, currentUser, deleteBooking}) => {
  $(document).ready(function () {
    $("#tabelaBook").DataTable({
      responsive: true,
      bDestroy: true,
    });
  });

  const admin = () => {
    if (currentUser != null) {
      return currentUser.admin;
    } else {
      return false;
    }
  };

  var bookingDetails = "";

  bookingDetails = bookings.map((booking) => {
    return (
      <tr key={booking.id} className="text-left">
        <td
          style={{
            width: 20 + "px",
          }}
        >
          {booking.id}
        </td>
        <td
          style={{
            width: 20 + "px",
          }}
        >
          {booking.showtime.movie.title}
        </td>
        <td
          style={{
            width: 20 + "px",
          }}
        >
          {booking.showtime.st_date}
        </td>
        <td
          style={{
            width: 20 + "px",
          }}
        >
          {booking.showtime.st_time}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {booking.ticket_qty}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {booking.user.name}
        </td>
        
        
        {admin() ? (
          <td
            style={{
              width: 120 + "px",
            }}
          >
            <button
              type="button"
              onClick={(e) => deleteBooking(e, booking.id)}
              className=""
            >
              Delete
            </button>
          </td>
        ) : (
          <></>
        )}
      </tr>
    );
  });

  return (
    <div style={{ minHeight: 50 + "vh" }}>
      <table className="display align-items-center" id="tabelaBook">
        <thead>
          <tr className="text-left font-medium">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Showtime</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Ticket Qty</th>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>{bookingDetails}</tbody>
      </table>
    </div>
  );
};

export default BookingsDataTable;
