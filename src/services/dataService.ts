import http from "./axiosService";
class TutorialDataService {
  getAll(): Promise<any> {
    return http.get("/tasks");
  }
  get(id: any): Promise<any> {
    return http.get(`/tasks/${id}`);
  }
  create(data: any): Promise<any> {
    return http.post("/tasks", data);
  }
  update(id: any, data: any): Promise<any> {
    return http.put(`/tasks/${id}`, data);
  }
  delete(id: any): Promise<any> {
    return http.delete(`/tasks/${id}`);
  }
  deleteAll(): Promise<any> {
    return http.delete(`/tasks`);
  }
  findByTitle(title: string): Promise<any> {
    return http.get(`/tasks?title=${title}`);
  }
}
export default new TutorialDataService();
