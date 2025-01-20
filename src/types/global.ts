// err
// :
// {}
// errorSources
// :
// [{…}]
// message
// :

import { BaseQueryApi } from "@reduxjs/toolkit/query";

// stack
// :

// success

export type TError = {
  data: {
    message: string;
    success: boolean;
    stack: string;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  message: string;
  success: boolean;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
