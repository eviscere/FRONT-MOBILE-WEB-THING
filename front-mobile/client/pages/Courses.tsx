import { Link } from "react-router-dom";
import StatusBar from "@/components/StatusBar";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Дискретная математика",
      year: "1 курс",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Теория вероятностей",
      year: "2 курс",
      image:
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Теория вероятностей",
      year: "2 курс",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      <div className="px-8 py-8">
        <h1 className="text-[32px] font-[900] tracking-[0.32px] text-support-black mb-[50px]">
          Курсы
        </h1>

        <p className="text-gray-4 text-xl leading-6 mb-12 max-w-[326px]">
          Для прохождения теста выберите предмет, которой вы сейчас пересдаете
        </p>

        <Link
          to="/map"
          className="w-full bg-primary text-white font-bold text-base rounded-full h-[47px] flex items-center justify-center tracking-[-0.32px] mb-[47px]"
        >
          Карта
        </Link>

        <div className="flex flex-col gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              to="/quiz"
              className="flex flex-col gap-2 group"
            >
              <div className="w-full h-[177px] rounded-[13px] overflow-hidden bg-gray-3">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#222] text-xl font-bold leading-[110%]">
                  {course.title}
                </h3>
                <p className="text-gray-6 text-base font-medium leading-[110%] mt-[3px]">
                  {course.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
