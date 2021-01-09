import { instance } from "../../untils/request";
export async function getMenu() {
  return await instance.get("/v1/admin/getMenu");
}
export async function userLogin(send_data) {
  return await instance.post("/v1/admin/login", send_data);
}
