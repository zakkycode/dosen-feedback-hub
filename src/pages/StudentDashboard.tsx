
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [evaluations, setEvaluations] = useState([
    {
      id: 1,
      course: "Pemrograman Web",
      lecturer: "Dr. Ahmad Wijaya",
      status: "pending",
      deadline: "2024-06-15",
      semester: "Genap 2023/2024"
    },
    {
      id: 2,
      course: "Basis Data",
      lecturer: "Prof. Siti Nurhaliza",
      status: "completed",
      deadline: "2024-06-10",
      semester: "Genap 2023/2024",
      rating: 4.5
    },
    {
      id: 3,
      course: "Algoritma dan Struktur Data",
      lecturer: "Dr. Budi Santoso",
      status: "pending",
      deadline: "2024-06-20",
      semester: "Genap 2023/2024"
    }
  ]);

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Selesai</Badge>;
    }
    return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Belum Selesai</Badge>;
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Dashboard Mahasiswa</h1>
                  <p className="text-sm text-gray-600">Evaluasi Pembelajaran</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang, Mahasiswa!</h2>
          <p className="text-gray-600">Berikan evaluasi untuk mata kuliah yang telah Anda ikuti</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Total Evaluasi</CardTitle>
              <div className="text-2xl font-bold">3</div>
            </CardHeader>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-100">Selesai</CardTitle>
              <div className="text-2xl font-bold">1</div>
            </CardHeader>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-100">Belum Selesai</CardTitle>
              <div className="text-2xl font-bold">2</div>
            </CardHeader>
          </Card>
        </div>

        {/* Evaluations List */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Daftar Evaluasi</span>
            </CardTitle>
            <CardDescription>
              Evaluasi mata kuliah semester ini
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {evaluations.map((evaluation) => (
                <Card key={evaluation.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{evaluation.course}</h3>
                        <p className="text-gray-600">{evaluation.lecturer}</p>
                        <p className="text-sm text-gray-500">{evaluation.semester}</p>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(evaluation.status)}
                        {evaluation.status === "completed" && evaluation.rating && (
                          <div className="flex items-center space-x-1 mt-2">
                            {getRatingStars(evaluation.rating)}
                            <span className="text-sm text-gray-600 ml-2">{evaluation.rating}/5</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Deadline: {new Date(evaluation.deadline).toLocaleDateString('id-ID')}</span>
                      </div>
                      
                      {evaluation.status === "pending" ? (
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                          Mulai Evaluasi
                        </Button>
                      ) : (
                        <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                          Lihat Hasil
                        </Button>
                      )}
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

export default StudentDashboard;
