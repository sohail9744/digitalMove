import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Css/form.css";
export default function ContactForm() {
  return (
    <>
      <main className="flex lg:flex-row sm:flex-col justify-around">
        <section className="flex flex-col gap-6 sm:w-full lg:p-0 sm:p-6 lg:w-6/12">
          <h2 className="text-3xl font-popins font-bold text-stone-800 opacity-80">
            Leave your Message
          </h2>
          <div className="flex w-full gap-4">
            <TextField
              required
              fullWidth
              id="nameId"
              label="Name"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              id="emailId"
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              required
              fullWidth
              type="number"
              id="mobileId"
              label="Phone Number"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              id="subjectId"
              label="Subject"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              id="outlined-textarea"
              label="Write your messsage ..."
              multiline
              rows={4}
            />
          </div>
          <div>
            <Button fullWidth variant="contained">
              Send
            </Button>
          </div>
        </section>
        <section className="sm:px-5 sm:pt-8 lg:pt-0">
          <h2 className="text-3xl font-popins font-bold text-stone-800 opacity-80">
            Get in touch
          </h2>
          <div className="flex flex-col mt-6 gap-10">
            <div className="flex gap-4 items-center">
              <div className="rounded-full p-3 flex justify-center items-center bg-customBlue hover:bg-orange-300 duration-1000 cursor-pointer transform hover:scale-110 focus:scale-110 transition-transform duration-3000">
                <span className="material-symbols-outlined text-5xl">
                  location_on
                </span>
              </div>
              <div>
                <label className="font-popins font-semibold" htmlFor="">
                  Address :
                </label>
                <p className="font-quickSand font-medium">
                  The City Tower, Central Jakarta,
                  <br /> 10310 Indonesia
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="rounded-full p-3 flex justify-center items-center bg-customBlue hover:bg-orange-300 duration-1000 cursor-pointer transform hover:scale-110 focus:scale-110 transition-transform duration-3000">
                <span className="material-symbols-outlined text-5xl">
                  support_agent
                </span>
              </div>
              <div>
                <label className="font-popins font-semibold" htmlFor="">
                  Contact Number :
                </label>
                <p className="font-quickSand font-medium">+62-8886461950</p>
                <p className="font-quickSand font-medium">+91-9111063317</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="rounded-full p-3 flex justify-center items-center bg-customBlue hover:bg-orange-300 duration-1000 cursor-pointer transform hover:scale-110 focus:scale-110 transition-transform duration-3000">
                <span className="material-symbols-outlined text-5xl">mail</span>
              </div>
              <div>
                <label className="font-popins font-semibold" htmlFor="">
                  Email :
                </label>
                <p className="font-quickSand font-medium">info@asyncloud.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
