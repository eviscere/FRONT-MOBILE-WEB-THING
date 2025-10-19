import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import StatusBar from "@/components/StatusBar";

export default function Map() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-1 relative">
      <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/37.6173,55.7558,12,0/375x812?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazY4YzN6bjMwMDAwM25wZ3gxNXh4aTRuIn0.example')] bg-cover bg-center"></div>

      <div className="relative z-10">
        <StatusBar />
        <div className="px-4 py-4 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-7 h-7 text-[#333]" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-[316px] w-full mx-4 pointer-events-auto">
          <h2 className="text-[22px] font-bold text-support-black text-center mb-2 tracking-[0.11px]">
            СУНЦ УрФУ
          </h2>
          <p className="text-gray-4 text-base text-center leading-6 mb-6">
            В данном центре можно подготовиться к поступлению, а также к
            олимпиадам по всем школьным предметам
          </p>
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-primary text-white font-bold text-base rounded-full h-[52px] flex items-center justify-center tracking-[-0.32px]"
          >
            Назад
          </button>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/3 w-7 h-7">
        <div className="relative">
          <div className="bg-primary rounded-xl shadow-lg w-7 h-7 flex items-center justify-center">
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9091 0H9.81818C9.52885 0 9.25137 0.121566 9.04679 0.337954C8.8422 0.554342 8.72727 0.847827 8.72727 1.15385V2.30769H7.63636V1.15385C7.63636 0.847827 7.52143 0.554342 7.31684 0.337954C7.11226 0.121566 6.83478 0 6.54545 0H5.45455C5.16522 0 4.88774 0.121566 4.68316 0.337954C4.47857 0.554342 4.36364 0.847827 4.36364 1.15385V2.30769H3.27273V1.15385C3.27273 0.847827 3.15779 0.554342 2.95321 0.337954C2.74862 0.121566 2.47115 0 2.18182 0H1.09091C0.801587 0 0.52411 0.121566 0.319525 0.337954C0.11494 0.554342 0 0.847827 0 1.15385V4.37668C-0.000452344 4.52826 0.0275815 4.67843 0.0824775 4.81845C0.137374 4.95847 0.218037 5.08555 0.319778 5.19231L1.09091 6.00793V13.8462C1.09091 14.1522 1.20585 14.4457 1.41043 14.662C1.61502 14.8784 1.89249 15 2.18182 15H9.81818C10.1075 15 10.385 14.8784 10.5896 14.662C10.7942 14.4457 10.9091 14.1522 10.9091 13.8462V6.00793L11.6802 5.19231C11.782 5.08555 11.8626 4.95847 11.9175 4.81845C11.9724 4.67843 12.0005 4.52826 12 4.37668V1.15385C12 0.847827 11.8851 0.554342 11.6805 0.337954C11.4759 0.121566 11.1984 0 10.9091 0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[9px] border-l-transparent border-r-transparent border-t-primary"></div>
        </div>
      </div>
    </div>
  );
}
