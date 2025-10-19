import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import StatusBar from "@/components/StatusBar";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/courses");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StatusBar />
      <div className="flex-1 px-4 pb-8">
      <div className="flex-1 flex flex-col pt-[150px]">
        <h1 className="text-[30px] font-[700] tracking-[-0.3px] text-[#333] mb-[52px]">
          Вход
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex flex-col bg-[#F0F0F0] rounded-xl px-4 py-[18px] h-[58px] justify-center">
              <input
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent outline-none text-sm placeholder:text-[#979797] text-[#333]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col bg-[#F0F0F0] rounded-xl px-4 py-[18px] h-[58px] justify-center">
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none text-sm placeholder:text-[#979797] text-[#333]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white font-bold text-base rounded-full h-[60px] flex items-center justify-center tracking-[-0.32px]"
          >
            Войти
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#979797] text-base mb-2">Еще нет аккаунта?</p>
          <Link
            to="/register"
            className="text-[#333] font-bold text-base block"
          >
            Регистрация
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
