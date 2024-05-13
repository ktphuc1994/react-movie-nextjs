export type TypeUser = {
  taiKhoan: number;
  hoTen: string;
  email: string;
  soDt: string;
  loaiNguoiDung: string;
};

export type TypeUserFromToken = TypeUser & {
  iat: number;
  exp: number;
};

export type TypeUserRegister = Omit<TypeUser, 'loaiNguoiDung'>;

export type TypeUserLogin = {
  email: string;
  matKhau: string;
};
