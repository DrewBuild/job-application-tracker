import { describe, it, expect } from "vitest";
import { validateJob, addJob, updateStatus, filterJobs } from "../src/services/jobService.js";

describe("Job Service Logic", () => {

  it("should validate a correct job", () => {
    const job = { company: "Google", role: "Engineer" };
    expect(validateJob(job)).toBe(true);
  });

  it("should throw error if company is missing", () => {
    const job = { company: "", role: "Engineer" };
    expect(() => validateJob(job)).toThrow("Company is required");
  });

  it("should add a new job", () => {
    const jobs = [];
    const newJob = { id: "1", company: "Google", role: "Engineer", status: "Applied" };
    const result = addJob(jobs, newJob);
    expect(result.length).toBe(1);
  });

  it("should update job status", () => {
    const jobs = [{ id: "1", company: "Google", role: "Engineer", status: "Applied" }];
    const updated = updateStatus(jobs, "1", "Interview");
    expect(updated[0].status).toBe("Interview");
  });

  it("should filter jobs by status", () => {
    const jobs = [
      { id: "1", status: "Applied" },
      { id: "2", status: "Interview" }
    ];
    const filtered = filterJobs(jobs, "Interview");
    expect(filtered.length).toBe(1);
  });

});