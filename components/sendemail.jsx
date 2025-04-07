import React from "react";
import emailjs from "emailjs-com";

import {LangageType,LanguageContext} from "@components/Context/context"

import ScrollToTopFab from "../components/scrollToTop";
export default function ContactUs() {

  const {language:langage,setLanguage:fonc} = React.useContext(LanguageContext)

  const Name = React.useRef("");
  const Message = React.useRef("");
  const Email = React.useRef("");
  const Sujet = React.useRef("");

  function sendEmail(e) {
    e.preventDefault(); 

    

    if (
      Sujet.current.value &&
      Name.current.value &&
      Message.current.value &&
      Email.current.value
    ) {
      emailjs
        .sendForm(
          "service_pidbxsw",
          "template_xeg35zr",
          e.target,
          "4P5LQMujV6zLr0o1N"
        )
        .then(
          (result) => {
            alert("Votre message a bien été envoyé");
            
          },
          (error) => {
            
            console.log(error.text);
          }
        );
    }else{
      alert("Merci de renseigner tous les champs")
    }
  }

  return (
    <>
      <div
        id="texte-contact"
        style={{
          
          backgroundColor: "#fff",
        }}
        className="text-center py-20 px-4  text-2xl h-auto w-full md:text-3xl xl:text-5xl"
      >
        {langage=="fr"?"Contactez moi et je vous rappelle très rapidement !":"Contact me and I will call you back very quickly!"}
      </div>
      <div
        className="w-full  p-2 flex justify-center"
        style={{
          height: "400px",
          backgroundColor: "#fff",
        }}
      >
        <div
          id="formcontact"
          className="h-auto w-3/4 md:w-1/2 rounded px-2 py-2 justify-start  self-auto m-auto m-4"
          style={{
            borderRadius: "1vw",
          }}
        >
          <form className="contact-form h-full flex flex-col justify-around" onSubmit={sendEmail}>
            <div className="flex flex-col gap-2 md:gap-4 flex justify-around px-2">
              <div className="w-full">
                <input type="hidden" name="contact_number" />
                <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center">
                  <label
                    className="p-2 "
                    style={{
                      minWidth: "70px",
                      display: "inline-block",
                    }}
                  >
                    {langage=="fr"?"Nom":"Name"}
                  </label>
                  <input ref={Name} className="px-2 w-full" id="form_sname" type="text" name="from_name" />
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center">
                  <label
                    className="p-2"
                    style={{
                      minWidth: "70px",
                      display: "inline-block",
                    }}
                  >
                    Email
                  </label>
                  <input ref={Email} className=" px-2 w-full" id="form_ssubject_" type="email" name="from_email" />
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center">
                  <label
                    className="p-2"
                    style={{
                      minWidth: "70px",
                      display: "inline-block",
                    }}
                  >
                    {langage=="fr"?"Sujet":"Subject"}
                  </label>
                  <input
                    id="form_ssubject"
                    ref={Sujet}
                    type="text"
                    name="subject"
                    className="px-2 w-full "
                    style={{
                      overflow: "hidden",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex pb-2 pl-2 md:pl-4 pr-2 justify-start" style={{ minHeight: "100px" }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                <label className="pb-4 pt-2 text-center">Message</label>
                <textarea
                  ref={Message}
                  name="html_message"
                  className="w-full"
                  id="html_message"
                />
              </div>
            </div>
            <div className="flex p-2 justify-center "
            
            >
              <input
                id="submitBouton"
                className="p-2 text-2xl md:text-3xl"
                style={{
                  borderRadius: "0.5vw",
                  
                }}
                type="submit"
                value={langage=="fr"?"Envoi":"OK"}
              />
            </div>
          </form>
        </div>
      </div>
      <div
        
        style={{
          height: "20vh",
          backgroundColor: "#fff",
        }}
      ></div>
      <ScrollToTopFab />
    </>
  );
}
