
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, TrendingUp, Users, BarChart3, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LecturerDashboard = () => {
  const navigate = useNavigate();
  const [evaluationData] = useState([
    {
      id: 1,
      course: "Pemrograman Web",
      semester: "Genap 2023/2024",
      totalStudents: 45,
      responseRate: 85,
      averageRating: 4.2,
      status: "completed",
      evaluations: {
        excellent: 18,
        good: 20,
        average: 6,
        poor: 1
      }
    },
    {
      id: 2,
      course: "Algoritma dan Pemrograman",
      semester: "Genap 2023/2024",
      totalStudents: 38,
      responseRate: 92,
      averageRating: 4.5,
      status: "completed",
      evaluations: {
        excellent: 22,
        good: 13,
        average: 3,
        poor: 0
      }
    },
    {
      id: 3,
      course: "Basis Data Lanjut",
      semester: "Genap 2023/2024",
      totalStudents: 32,
      responseRate: 78,
      averageRating: 4.0,
      status: "ongoing",
      evaluations: {
        excellent: 12,
        good: 15,
        average: 4,
        poor: 1
      }
    }
  ]);

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Selesai</Badge>;
    }
    return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Berlangsung</Badge>;
  };

  const totalStudents = evaluationData.reduce((sum, course) => sum + course.totalStudents, 0);
  const averageResponse = Math.round(evaluationData.reduce((sum, course) => sum + course.responseRate, 0) / evaluationData.length);
  const overallRating = (evaluationData.reduce((sum, course) => sum + course.averageRating, 0) / evaluationData.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Dashboard Dosen</h1>
                  <p className="text-sm text-gray-600">Hasil Evaluasi Pembelajaran</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang, Dr. Ahmad Wijaya!</h2>
          <p className="text-gray-600">Lihat hasil evaluasi pembelajaran dari mahasiswa Anda</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-100">Total Mahasiswa</CardTitle>
              <div className="text-2xl font-bold">{totalStudents}</div>
            </CardHeader>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Tingkat Respon</CardTitle>
              <div className="text-2xl font-bold">{averageResponse}%</div>
            </CardHeader>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-100">Rating Rata-rata</CardTitle>
              <div className="text-2xl font-bold">{overallRating}/5</div>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-100">Mata Kuliah</CardTitle>
              <div className="text-2xl font-bold">{evaluationData.length}</div>
            </CardHeader>
          </Card>
        </div>

        {/* Course Evaluations */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-green-500" />
              <span>Evaluasi per Mata Kuliah</span>
            </CardTitle>
            <CardDescription>
              Detail hasil evaluasi untuk setiap mata kuliah yang diampu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {evaluationData.map((course) => (
                <Card key={course.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.course}</h3>
                        <p className="text-gray-600">{course.semester}</p>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(course.status)}
                        <div className="flex items-center space-x-1 mt-2">
                          {getRatingStars(course.averageRating)}
                          <span className="text-sm text-gray-600 ml-2">{course.averageRating}/5</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{course.totalStudents}</div>
                        <div className="text-sm text-gray-500">Total Mahasiswa</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{course.responseRate}%</div>
                        <div className="text-sm text-gray-500">Tingkat Respon</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">{course.evaluations.excellent}</div>
                        <div className="text-sm text-gray-500">Sangat Baik</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{course.evaluations.poor}</div>
                        <div className="text-sm text-gray-500">Kurang</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{Math.round(course.totalStudents * course.responseRate / 100)} responses</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Rating: {course.averageRating}/5</span>
                        </div>
                      </div>
                      
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Lihat Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LecturerDashboard;
