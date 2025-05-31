
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, BookOpen, TrendingUp, BarChart3, FileText, Calendar, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AcademicDashboard = () => {
  const navigate = useNavigate();
  const [dashboardData] = useState({
    overview: {
      totalLecturers: 45,
      totalCourses: 128,
      totalStudents: 1250,
      totalEvaluations: 856,
      completionRate: 67,
      averageRating: 4.1
    },
    departments: [
      {
        name: "Teknik Informatika",
        lecturers: 15,
        courses: 42,
        completionRate: 85,
        averageRating: 4.3
      },
      {
        name: "Sistem Informasi",
        lecturers: 12,
        courses: 36,
        completionRate: 78,
        averageRating: 4.2
      },
      {
        name: "Teknik Komputer",
        lecturers: 10,
        courses: 28,
        completionRate: 72,
        averageRating: 4.0
      },
      {
        name: "Data Science",
        lecturers: 8,
        courses: 22,
        completionRate: 90,
        averageRating: 4.4
      }
    ],
    recentEvaluations: [
      {
        id: 1,
        lecturer: "Dr. Ahmad Wijaya",
        course: "Pemrograman Web",
        department: "Teknik Informatika",
        completion: 85,
        rating: 4.2,
        responseCount: 38
      },
      {
        id: 2,
        lecturer: "Prof. Siti Nurhaliza",
        course: "Basis Data",
        department: "Sistem Informasi",
        completion: 92,
        rating: 4.5,
        responseCount: 35
      },
      {
        id: 3,
        lecturer: "Dr. Budi Santoso",
        course: "Algoritma",
        department: "Teknik Informatika",
        completion: 78,
        rating: 4.0,
        responseCount: 42
      }
    ]
  });

  const getCompletionColor = (rate: number) => {
    if (rate >= 80) return "text-green-600";
    if (rate >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getCompletionBadge = (rate: number) => {
    if (rate >= 80) return <Badge className="bg-green-100 text-green-800">Tinggi</Badge>;
    if (rate >= 60) return <Badge className="bg-yellow-100 text-yellow-800">Sedang</Badge>;
    return <Badge className="bg-red-100 text-red-800">Rendah</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
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
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Dashboard Akademik</h1>
                  <p className="text-sm text-gray-600">Monitoring Sistem Evaluasi</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Laporan
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Periode Baru
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Akademik</h2>
          <p className="text-gray-600">Kelola dan pantau sistem evaluasi pembelajaran di seluruh fakultas</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Total Dosen</CardTitle>
              <div className="text-2xl font-bold">{dashboardData.overview.totalLecturers}</div>
            </CardHeader>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-100">Mata Kuliah</CardTitle>
              <div className="text-2xl font-bold">{dashboardData.overview.totalCourses}</div>
            </CardHeader>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-100">Mahasiswa</CardTitle>
              <div className="text-2xl font-bold">{dashboardData.overview.totalStudents}</div>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-100">Evaluasi</CardTitle>
              <div className="text-2xl font-bold">{dashboardData.overview.totalEvaluations}</div>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-red-500 to-red-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-100">Completion</CardTitle>
              <div className="text-2xl font-bold">{dashboardData.overview.completionRate}%</div>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-indigo-100">Avg Rating</CardTitle>
              <div className="text-2xl font-bold">{dashboardData.overview.averageRating}/5</div>
            </CardHeader>
          </Card>
        </div>

        {/* Departments Overview */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              <span>Overview Program Studi</span>
            </CardTitle>
            <CardDescription>
              Statistik evaluasi per program studi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {dashboardData.departments.map((dept, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                      <p className="text-gray-600">{dept.lecturers} Dosen • {dept.courses} Mata Kuliah</p>
                    </div>
                    <div className="text-right">
                      {getCompletionBadge(dept.completionRate)}
                      <div className="text-sm text-gray-600 mt-1">Rating: {dept.averageRating}/5</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Tingkat Penyelesaian</span>
                      <span className={`font-medium ${getCompletionColor(dept.completionRate)}`}>
                        {dept.completionRate}%
                      </span>
                    </div>
                    <Progress value={dept.completionRate} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Evaluations */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <span>Evaluasi Terbaru</span>
            </CardTitle>
            <CardDescription>
              Daftar evaluasi yang baru saja diselesaikan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentEvaluations.map((evaluation) => (
                <Card key={evaluation.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{evaluation.course}</h4>
                        <p className="text-gray-600">{evaluation.lecturer}</p>
                        <p className="text-sm text-gray-500">{evaluation.department}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">{evaluation.rating}/5</div>
                        <div className="text-sm text-gray-500">{evaluation.responseCount} responden</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress Evaluasi</span>
                        <span className={`font-medium ${getCompletionColor(evaluation.completion)}`}>
                          {evaluation.completion}%
                        </span>
                      </div>
                      <Progress value={evaluation.completion} className="h-2" />
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

export default AcademicDashboard;
