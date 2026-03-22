import { SocialLinks } from './SocialLinks';
import { InfoTable } from './InfoTable';

interface ProfileInfo {
  name: string;
  designation: string;
  landline: string;
  email: string[];
  specialization: string[];
}

interface ProfileHeaderProps {
  title: string;
  profileImage: string;
  profileInfo: ProfileInfo;
  socialLinks: Array<{ name: string; url: string; icon: string }>;
}

export function ProfileHeader({
  title,
  profileImage,
  profileInfo,
  socialLinks,
}: ProfileHeaderProps) {
  const profileColumns = [
    { key: 'field', label: 'Field' },
    { key: 'value', label: 'Information' },
  ];

  const profileData = [
    { field: 'Name', value: profileInfo.name },
    { field: 'Designation', value: profileInfo.designation },
    { field: 'Mobile No', value: profileInfo.landline },
    { field: 'E-mail Id', value: profileInfo.email.join(', ') },
    {
      field: 'Specialization',
      value: profileInfo.specialization.join(', '),
    },
  ];

  return (
    <div className="p-6 mb-6">
      <h1 className="text-3xl font-bold text-teal-700 pb-4 mb-6 border-b-2 border-teal-600">
        {title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md border border-gray-200 mb-4">
            <img
              src={profileImage}
              alt={profileInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <SocialLinks links={socialLinks} />
        </div>

        {/* Profile Information Table */}
        <div className="md:col-span-2">
          <InfoTable columns={profileColumns} data={profileData} striped={false} />
        </div>
      </div>
    </div>
  );
}
