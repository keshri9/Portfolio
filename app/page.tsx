import { ProfileHeader } from '@/components/ProfileHeader'
import { SectionCard } from '@/components/SectionCard'
import { InfoTable } from '@/components/InfoTable'

// DATA IMPORTS
import { academicQualificationsData, academicQualificationsColumns } from '@/app/data/academicQualificationsData'
import { employmentProfileData, employmentProfileColumns } from '@/app/data/employmentProfileData'
import { responsibilitiesWithinUniversityData, responsibilitiesWithinUniversityColumns } from '@/app/data/responsibilitiesWithinUniversityData'
import { responsibilitiesOutsideUniversityData, responsibilitiesColumns } from '@/app/data/responsibilitiesOutsideUniversityData'
import { awardsData, awardsColumns } from '@/app/data/awardsData'
import { majorProjectsData, projectsColumns } from '@/app/data/majorProjectsData'
import { phdGuidanceData, phdColumns } from '@/app/data/phdGuidanceData'
import { workshopsParticipationData, workshopParticipationColumns } from '@/app/data/workshopsParticipationData'
import { workshopsOrganizedData, workshopOrganizedColumns } from '@/app/data/workshopsOrganizedData'
import invitedTalksData from '@/app/data/invitedTalksData'
import { membershipsData, membershipColumns } from '@/app/data/membershipsData'
import { foreignVisitsData, foreignVisitColumns } from '@/app/data/foreignVisitsData'
import { invitedKeynoteSpeakerData, talksColumns } from '@/app/data/invitedKeynoteSpeakerData'
import { BulletList } from '@/components/BulletList'
import awardsDataBulletList from '@/app/data/awardsDataBulletList'
import booksPublishedData from '@/app/data/booksPublishedData'
import Address from '@/components/Address'

export default function FacultyProfile() {

  const profileInfo = {
    name: 'Prof. Divakar Keshri',
    designation: 'Assistant Professor',
    landline: '+91-7004582656',
    email: ['divakar.keshri44376@paruluniversity.ac.in'],
    specialization: [
      
      'Image Processing',
      'Video Processing',
      'Deep Learning', 
      'Machine Learning',
      
    ],
  }

  const socialLinks = [
    { name: 'ORCID', url: 'https://orcid.org/', icon: '🔗' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/', icon: '📚' },
    { name: 'Scopus', url: 'https://www.scopus.com/', icon: '📊' },
    { name: 'Vidwan', url: 'https://vidwan.inflibnet.ac.in/', icon: '🎓' },
    { name: 'ResearchGate', url: 'https://www.researchgate.net/', icon: '🌐' },
  ]




  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 ">

        <ProfileHeader
          title="Prof. Divakar Keshri"
          profileImage="/profile.jpg"
          profileInfo={profileInfo}
          socialLinks={socialLinks}
        />

        <SectionCard title="Academic Qualifications">
          <InfoTable columns={academicQualificationsColumns} data={academicQualificationsData} />
        </SectionCard>

        <SectionCard title="Employment Profile">
          <InfoTable columns={employmentProfileColumns} data={employmentProfileData} />
        </SectionCard>

        <SectionCard title="Academic / Administrative Responsibilities within University">
          <InfoTable columns={responsibilitiesWithinUniversityColumns} data={responsibilitiesWithinUniversityData} />
        </SectionCard>

        <SectionCard title="Academic / Administrative Responsibilities outside University">
          <InfoTable columns={responsibilitiesColumns} data={responsibilitiesOutsideUniversityData} />
        </SectionCard>

        <SectionCard title="Awards / Associateships">
          <InfoTable columns={awardsColumns} data={awardsData} />
        </SectionCard>

        <SectionCard title="Major R&D Projects">
          <InfoTable columns={projectsColumns} data={majorProjectsData} />
        </SectionCard>

        <SectionCard title="PhD Scholars Guided / Ongoing">
          <InfoTable columns={phdColumns} data={phdGuidanceData} />
        </SectionCard>

        <SectionCard title="Participation in Workshops / Conferences">
          <InfoTable columns={workshopParticipationColumns} data={workshopsParticipationData} />
        </SectionCard>

        <SectionCard title="Workshops / Conferences Organized">
          <InfoTable columns={workshopOrganizedColumns} data={workshopsOrganizedData} />
        </SectionCard>

        <SectionCard title="Invited Talks Delivered">
          <InfoTable columns={talksColumns} data={invitedTalksData} />
        </SectionCard>

        <SectionCard title="Membership in Learned Societies">
          <InfoTable columns={membershipColumns} data={membershipsData} />
        </SectionCard>

        <SectionCard title="Academic Foreign Visits">
          <InfoTable columns={foreignVisitColumns} data={foreignVisitsData} />
        </SectionCard>

        <SectionCard title="Awards">
          <BulletList items={awardsDataBulletList} />
        </SectionCard>

        <SectionCard title="Books Published">
          <BulletList items={booksPublishedData} />
        </SectionCard>



        <SectionCard title="Invited Keynote Speaker">
          <InfoTable columns={talksColumns} data={invitedKeynoteSpeakerData} />
        </SectionCard>
        
        <SectionCard title="Address">
          <Address />
        </SectionCard>

      </div>

    </main>
  )
}