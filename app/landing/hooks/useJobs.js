"use client";

import { useState, useEffect, useMemo } from "react";

export const useJobs = () => {
  const PAGE_SIZE = 50;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = async (pageNumber = 1) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.internstap.in.net/jobs?page=${pageNumber}&limit=${PAGE_SIZE}`
      );

      const data = await response.json();

      // Backend returns: { page, limit, total, jobs: [...] }
      const newJobs = data.jobs || [];

      if (pageNumber === 1) {
        setJobs(newJobs);
      } else {
        setJobs((prev) => [...prev, ...newJobs]);
      }

      // Check if more pages exist
      if (newJobs.length < PAGE_SIZE) {
        setHasMore(false);
      }

    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(1);
  }, []);

  const loadMore = () => {
    if (!hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs(nextPage);
  };

  const uniqueLocations = useMemo(
    () => [...new Set(jobs.map((j) => j.location).filter(Boolean))].sort(),
    [jobs]
  );

  const uniqueBatches = useMemo(
    () => [...new Set(jobs.map((j) => j.batch).filter(Boolean))].sort(),
    [jobs]
  );

  return {
    jobs,
    loading,
    loadMore,
    hasMore,
    uniqueLocations,
    uniqueBatches,
  };
};
