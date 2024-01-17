import * as yup from 'yup';

const loginSchema = yup
  .object({
    username: yup.string().required('Username wajib diisi').min(4, 'Username minimal 4 karakter').max(20, 'Username maksimal 20 karakter'),
    password: yup
      .string()
      .required('Password wajib diisi')
      .min(8, 'Password minimal 8 karakter')
      .max(20, 'Username maksimal 20 karakter')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 'Kata sandi harus mengandung setidaknya satu huruf kapital, satu huruf kecil, satu angka, dan satu karakter khusus'),
  })
  .required();

const registerSchema = yup
  .object({
    username: yup
      .string()
      .required('Username wajib diisi')
      .min(3, 'Username minimal 3 karakter')
      .max(20, 'Username maksimal 20 karakter')
      .matches(/^[a-zA-Z0-9_]+$/, 'Username hanya boleh mengandung huruf, angka, dan garis bawah'),
    email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
    password: yup
      .string()
      .required('Password wajib diisi')
      .min(8, 'Password minimal 8 karakter')
      .max(20, 'Password maksimal 20 karakter')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 'Kata sandi harus mengandung setidaknya satu huruf kapital, satu huruf kecil, satu angka, dan satu karakter khusus'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Konfirmasi password harus sama dengan password')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 'Kata sandi harus mengandung setidaknya satu huruf kapital, satu huruf kecil, satu angka, dan satu karakter khusus')
      .required('Konfirmasi password wajib diisi'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10,15}$/, 'Nomor telepon hanya boleh mengandung angka dan minimal 10 karakter')
      .required('Nomor telepon wajib diisi'),
    fullname: yup.string().required('Nama lengkap wajib diisi').min(3, 'Nama lengkap minimal 3 karakter').max(50, 'Nama lengkap maksimal 50 karakter'),
    address: yup.string().required('Alamat wajib diisi').min(5, 'Alamat minimal 5 karakter').max(100, 'Alamat maksimal 100 karakter'),
    zipCode: yup
      .string()
      .matches(/^[0-9]{5}$/, 'Kode pos hanya boleh mengandung angka dan tepat 5 karakter')
      .required('Kode pos wajib diisi'),
    gender: yup.string().oneOf(['Laki-laki', 'Perempuan', 'Lainnya'], 'Pilih salah satu jenis kelamin').required('Jenis kelamin wajib diisi'),
    birthDate: yup.date().required('Tanggal lahir wajib diisi').typeError('Format tanggal lahir tidak valid').nullable(),
  })
  .required();

const updateUserSchema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one number, and one special character')
    .required('Password is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10,12}$/, 'Invalid phone number')
    .required('Phone number is required'),
  address: yup.string().required('Address is required'),
  fullname: yup.string().required('Full name is required'),
});

export { loginSchema, registerSchema, updateUserSchema };
