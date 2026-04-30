import { things, categories } from "../data/things";

export async function getThings() {
  // 模拟 API 调用延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(things);
    }, 300);
  });
}

export async function getCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 200);
  });
}

export async function getThingById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const thing = things.find(t => t.id === parseInt(id));
      if (thing) {
        resolve(thing);
      } else {
        reject(new Error("Thing not found"));
      }
    }, 200);
  });
}

export async function getThingsByCategory(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId === "all") {
        resolve(things);
      } else {
        const filtered = things.filter(t => {
          const categoryMap = {
            efficiency: "效率提升",
            life: "生活灵感",
            study: "学习成长",
            fun: "娱乐消遣",
            creative: "创意脑洞"
          };
          return t.category === categoryMap[categoryId];
        });
        resolve(filtered);
      }
    }, 300);
  });
}

export async function getRandomThing() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * things.length);
      resolve(things[randomIndex]);
    }, 200);
  });
}