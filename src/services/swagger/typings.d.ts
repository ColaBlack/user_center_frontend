declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserVOByIdParams = {
    id: number;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUser;
    searchCount?: PageUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserVO;
    searchCount?: PageUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type User = {
    userId?: number;
    userNickname?: string;
    userAccount?: string;
    userAvatar?: string;
    userPassword?: string;
    userRole?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
    userProfile?: string;
  };

  type UserAddRequest = {
    userId?: number;
    userNickname?: string;
    userAccount?: string;
    userAvatar?: string;
    userPassword?: string;
    userRole?: number;
    userprofile?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
    userNickname?: string;
    userAccount?: string;
    userRole?: number;
    userProfile?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type UserUpdateMyRequest = {
    userNickname?: string;
    userAvatar?: string;
    userPassword?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    userId?: number;
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: number;
    userProfile?: string;
  };

  type UserVO = {
    userId?: number;
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: number;
    userProfile?: string;
  };
}
