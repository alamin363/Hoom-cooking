import React from "react";

const Location = () => {
  return (
    <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97597.55032894762!2d88.93045754905181!3d24.624006654447886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc6c2a93da4cd7%3A0x4ab528ce06b91bf5!2z4KaG4Kak4KeN4Kaw4Ka-4KaH!5e0!3m2!1sbn!2sbd!4v1667886607655!5m2!1sbn!2sbd"
          width="600"
          height="450"
          title="google map"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

  );
};

export default Location;
