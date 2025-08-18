import "../css/whatsapp.css";

const WhatsAppBot = ({ bottom }) => {
  return (
    <>
      <a
        href="https://wa.me/+351920366185?text=Hey!"
        className="wa-chat-btn-fixed-wrap"
        target="_blank"
      >
        <img
          className="wa-chat-btn-icon-image btn-whatsapp-pulse"
          alt="Whatsapp Chat Button"
          src="https://ar-euro.s3.ap-south-1.amazonaws.com/ind-website-2.0/test/whatsapp+logo.png"
        />
      </a>
    </>
  );
};

WhatsAppBot.defaultProps = {
  bottom: "5%",
};

export default WhatsAppBot;
