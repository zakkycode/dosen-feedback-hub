
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Star, TrendingUp, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "student",
      title: "Mahasiswa",
      description: "Berikan evaluasi untuk dosen",
      icon: GraduationCap,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      route: "/student"
    },
    {
      id: "lecturer",
      title: "Dosen",
      description: "Lihat hasil evaluasi Anda",
      icon: BookOpen,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      route: "/lecturer"
    },
    {
      id: "academic",
      title: "Akademik",
      description: "Kelola sistem evaluasi",
      icon: Users,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      route: "/academic"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Evaluasi Komprehensif",
      description: "Sistem penilaian yang lengkap dan terstruktur"
    },
    {
      icon: TrendingUp,
      title: "Analisis Real-time",
      description: "Dashboard dengan data dan grafik yang terupdate"
    },
    {
      icon: FileText,
      title: "Laporan Detail",
      description: "Laporan evaluasi yang komprehensif dan mudah dipahami"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EvaluasiDosen</h1>
                <p className="text-sm text-gray-600">Sistem Evaluasi Pembelajaran</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Sistem Evaluasi Dosen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Platform digital untuk evaluasi pembelajaran yang membantu meningkatkan kualitas pendidikan melalui feedback mahasiswa
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 ${
                  selectedRole === role.id ? 'ring-2 ring-blue-400 shadow-lg' : ''
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${role.color} ${role.hoverColor} rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{role.title}</CardTitle>
                  <CardDescription className="text-gray-600">{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    className={`w-full ${role.color} ${role.hoverColor} text-white border-0 transition-all duration-300`}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(role.route);
                    }}
                  >
                    Masuk sebagai {role.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;
