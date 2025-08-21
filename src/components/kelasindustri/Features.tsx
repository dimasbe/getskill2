import React, { useEffect, useState } from "react";

interface FeatureData {
  schoolCount: number;
  alumniCount: number;
  classroomCount: number;
  studentCount: number;
  divisions: { name: string }[];
}

const Features: React.FC = () => {
  const [data, setData] = useState<FeatureData>({
    schoolCount: 0,
    alumniCount: 0,
    classroomCount: 0,
    studentCount: 0,
    divisions: []
  });

  useEffect(() => {
    fetch("https://api.example.com/api/industrial-class")
      .then(res => res.json())
      .then(res => {
        if (res.success) setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="features__area-four section-pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="features__item-three">
              <h2>Sekolah</h2>
              <p>Total {data.schoolCount} Sekolah Yang Tergabung Dalam Kelas Industri</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="features__item-three">
              <h2>Alumni</h2>
              <p>Terdapat {data.alumniCount} Alumni Yang Telah Lulus Dari Kelas Industri</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="features__item-three">
              <h2>Kelas</h2>
              <p>Ada {data.classroomCount} Kelas Yang Terdaftar Pada Kelas Industri.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="features__item-three">
              <h2>Siswa</h2>
              <p>Total {data.studentCount} Siswa Yang Telah Bergabung Dalam Kelas Industri</p>
            </div>
          </div>
        </div>

        {/* Divisions */}
        <div className="mt-4">
          {data.divisions.map((division, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">→</div>
              <div className="feature-text">{division.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
