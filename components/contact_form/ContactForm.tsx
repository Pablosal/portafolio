import * as React from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = ({ closeModalToScreen }) => {
  const [formParams, setFormParams] = React.useState({
    reply_to: 'nobody',
    to_name: 'Pablo Salgado',
  });
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        formParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('Mensaje ha sido enviado, muchas gracias');
          closeModalToScreen();
        },
        (error) => {
          closeModalToScreen();
          alert(
            'Ha habido un error en el envio del mensaje, pronto sera arreglado'
          );
        }
      );
  }
  const handleChange = (e) => {
    setFormParams({ ...formParams, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={sendEmail} className="space-y-8">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Tú Email
        </label>
        <input
          type="email"
          name="from_email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="email@mail.com"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Tú Nombre
        </label>
        <input
          type="text"
          name="from_name"
          id="subject"
          onChange={handleChange}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder=". . ."
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Tú Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          onChange={handleChange}
          placeholder=". . ."
        ></textarea>
      </div>
      <button
        onClick={sendEmail}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Enviar Mensaje
      </button>
    </form>
  );
};

export default ContactForm;
