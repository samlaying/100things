import { useState, useEffect } from 'react';
import { getThings, getCategories, getRandomThing } from '../services/thingsApi';

export const useThings = () => {
  const [things, setThings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadThings = async () => {
      try {
        setLoading(true);
        const data = await getThings();
        setThings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadThings();
  }, []);

  return { things, loading, error };
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};

export const useRandomThing = () => {
  const [thing, setThing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandom = async () => {
    try {
      setLoading(true);
      const data = await getRandomThing();
      setThing(data);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { thing, loading, error, getRandom };
};