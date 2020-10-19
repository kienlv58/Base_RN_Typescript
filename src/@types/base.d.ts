interface CallbackType {
  onBegan?: (data: any) => void;
  onSuccess?: (data: any) => void;
  onFail?: (data: any) => void;
  onFinish?: (data: any) => void;
}
