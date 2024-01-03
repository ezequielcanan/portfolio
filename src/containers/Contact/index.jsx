import {useForm} from "react-hook-form"
import emailjs from "@emailjs/browser"
import Section from "../../components/Section"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"
import { useRef } from "react"
import { AiFillInstagram, AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai"

const Contact = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm()
  const form = useRef()

  const formSubmit = handleSubmit(data => {
    emailjs.sendForm("service_xuigz3q", "template_lspnv1g", form.current, "_uVKRfNb5tOupbgs-").then(
      (result) => {
        reset()
        Toastify({
          duration: 1500,
          text: "The form was sent successfully!",
          gravity: "top",
          position: "right",
          offset: {
            x: 50,
            y: 30
          },
          style: {
            background: "#0cff99",
            "font-size": "1.5rem",
            color: "#121212"
          }
        }).showToast()
      },
      (error) => {
        reset()
        Toastify({
          duration: 1500,
          text: "Error!",
          gravity: "top",
          position: "right",
          offset: {
            x: 50,
            y: 30
          },
          style: {
            background: "#0cff99",
            "font-size": "1.5rem",
            color: "#121212"
          }
        }).showToast()
      }
      )
  })

  return (
    <main className="w-full overflow-hidden">
      <Section className={"min-h-screen bg-third px-[20px] flex flex-col items-center justify-evenly lg:flex-row"}>
        <div className="flex flex-col items-center gap-y-[40px]">
          <h2 className="text-secondary text-5xl">Get in touch!</h2>
          <div className="flex w-full justify-between">
            <AiFillInstagram className="text-5xl text-secondary"/>
            <AiFillGithub className="text-5xl text-secondary"/>
            <AiOutlineWhatsApp className="text-5xl text-secondary"/>
          </div>
        </div>
        <form className="bg-[#111] p-[40px] rounded-md w-full max-w-lg" onSubmit={formSubmit} ref={form}>
          <ul className="flex flex-col gap-y-[30px]">
            <li className="flex flex-col gap-y-[4px]">
              <label htmlFor="user_name" className="text-fourth text-2xl">Name:</label>
              <input type="text" {...register("user_name", { required: {value: true, message: "Name is required"} })} placeholder={errors.user_name && errors.user_name.message} className=" text-xl px-2 py-1 focus:outline-none bg-third text-fourth rounded border border-fourth"/>
            </li>
            <li className="flex flex-col gap-y-[4px]">
              <label htmlFor="user_email" className="text-fourth text-2xl">Email:</label>
              <input type="email" {...register("user_email", { required: {value: true, message: "Email is required"} })} placeholder={errors.user_email && errors.user_email.message} className=" text-xl px-2 py-1 focus:outline-none bg-third text-fourth rounded border border-fourth"/>
            </li>
            <li className="flex flex-col gap-y-[4px]">
              <label htmlFor="message" className="text-fourth text-2xl">Message:</label>
              <textarea rows={5} {...register("message", { required: {value: true, message: "You must write a message"} })} placeholder={errors.message && errors.message.message} className="resize-none text-xl px-2 py-1 focus:outline-none bg-third text-fourth rounded border border-fourth"/>
            </li>
            <li>
              <button type="submit" className="bg-secondary px-3 py-2 text-2xl rounded w-full">Send</button>
            </li>
          </ul>
        </form>
      </Section>
    </main>
  )
}

export default Contact