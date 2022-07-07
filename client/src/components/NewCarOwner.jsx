import React from "react";
import { useNavigate } from "react-router-dom";
import PopupMolecule from "./Popup";
import toast from "react-hot-toast";
import { createOwner } from "../../../server/src/services/auth.service";

export default function NewCarOwner() {
  const [showPopup] = React.useState(true);
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    address: "",
    names: "",
    phone: "",
    nationalId: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const user = await createOwner(values);

    if (user.data) {
      toast.success("Owner created successfully", { duration: 3000 });
      setValues({
        address: "",
        names: "",
        phone: "",
        nationalId: "",
      });

      window.location.href = "/owners";
    } else {
      toast.error(user.message);
    }
  }

  return (
    <PopupMolecule
      open={showPopup}
      title={"Register New Car owner"}
      onClose={() => navigate(-1)}  
    >
      <div className="px-[10px]">
        <form
          className="-mx-3 flex mt-4 flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="names"
              className="block text-sm font-semibold text-gray-900"
            >
              Owner Names
            </label>
            <input
              onChange={handleChange}
              value={values.names}
              name="names"
              id="names"
              placeholder="Stecie Niyonzima"
              required
              className=" rounded-2xl border border-[#DEE2E6]  text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Owner address
            </label>
            <input
              onChange={handleChange}
              name="address"
              id="address"
              placeholder="Kigali"
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nationalId"
              className="block text-sm font-semibold text-gray-900"
            >
              Owner national Id
            </label>
            <input
              onChange={handleChange}
              type="number"
              required
              name="nationalId"
              id="nationalId"
              placeholder="12003701459959068"
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Owner phone number
            </label>
            <input
              onChange={handleChange}
              type="tel"
              name="phone"
              id="phone"
              placeholder="0786939074"
              required
              className=" rounded-2xl border border-gray-300 text-gray-900 sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl font-semibold flex justify-center items-center mt-2 w-full text-white bg-[#FB3131] p-3 "
          >
            Register car owner
          </button>
        </form>
      </div>
    </PopupMolecule>
  );
}
