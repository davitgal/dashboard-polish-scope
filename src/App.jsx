import { useMemo, useState } from 'react';
import { GROUPS, TASKS } from './data';

const STORAGE_KEY = 'polish-scope-statuses-v1';

const STATUS = {
  pending: { label: 'Ожидает проверки', color: '#f9a03f' },
  passed: { label: 'Отвалидировано', color: '#2ecd6f' },
  failed: { label: 'Проверка провалена', color: '#e5484d' },
};

function loadStatuses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveStatuses(statuses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
}

export default function App() {
  const [statuses, setStatuses] = useState(loadStatuses);
  const [filterGroup, setFilterGroup] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const setStatus = (id, status) => {
    setStatuses((prev) => {
      const next = { ...prev, [id]: status };
      saveStatuses(next);
      return next;
    });
  };

  const getStatus = (id) => statuses[id] || 'pending';

  const stats = useMemo(() => {
    const total = TASKS.length;
    let passed = 0;
    let failed = 0;
    let pending = 0;
    for (const t of TASKS) {
      const s = getStatus(t.id);
      if (s === 'passed') passed++;
      else if (s === 'failed') failed++;
      else pending++;
    }
    return { total, passed, failed, pending };
  }, [statuses]);

  const groupStats = useMemo(() => {
    const acc = {};
    for (const key of Object.keys(GROUPS)) {
      acc[key] = { total: 0, passed: 0, failed: 0, pending: 0 };
    }
    for (const t of TASKS) {
      const s = getStatus(t.id);
      acc[t.group].total++;
      acc[t.group][s]++;
    }
    return acc;
  }, [statuses]);

  const filteredTasks = TASKS.filter((t) => {
    if (filterGroup !== 'all' && t.group !== filterGroup) return false;
    if (filterStatus !== 'all' && getStatus(t.id) !== filterStatus) return false;
    return true;
  });

  const tasksByGroup = useMemo(() => {
    const acc = { manual: [], analytics: [], technical: [] };
    for (const t of filteredTasks) acc[t.group].push(t);
    return acc;
  }, [filteredTasks, statuses]);

  return (
    <div className="app">
      <header className="header">
        <h1>Polishing Scope — Валидация</h1>
        <p className="subtitle">
          Проверка задач из ClickUp (Project = "Polishing scope") перед закрытием аудита
        </p>
      </header>

      <section className="cards">
        <div className="card">
          <span className="card-value">{stats.total}</span>
          <span className="card-label">Всего задач</span>
        </div>
        <div className="card" style={{ borderColor: STATUS.pending.color }}>
          <span className="card-value" style={{ color: STATUS.pending.color }}>
            {stats.pending}
          </span>
          <span className="card-label">Ожидают проверки</span>
        </div>
        <div className="card" style={{ borderColor: STATUS.passed.color }}>
          <span className="card-value" style={{ color: STATUS.passed.color }}>
            {stats.passed}
          </span>
          <span className="card-label">Отвалидировано</span>
        </div>
        <div className="card" style={{ borderColor: STATUS.failed.color }}>
          <span className="card-value" style={{ color: STATUS.failed.color }}>
            {stats.failed}
          </span>
          <span className="card-label">Провалено</span>
        </div>
      </section>

      <section className="group-cards">
        {Object.entries(GROUPS).map(([key, g]) => (
          <div className="group-card" key={key} style={{ borderTopColor: g.color }}>
            <div className="group-card-title" style={{ color: g.color }}>
              {g.title}
            </div>
            <div className="group-card-subtitle">{g.subtitle}</div>
            <div className="group-card-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      groupStats[key].total
                        ? (groupStats[key].passed / groupStats[key].total) * 100
                        : 0
                    }%`,
                    background: STATUS.passed.color,
                  }}
                />
              </div>
              <span className="progress-text">
                {groupStats[key].passed}/{groupStats[key].total} отвалидировано
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="filters">
        <div className="filter-row">
          <span className="filter-label">Группа:</span>
          <button
            className={filterGroup === 'all' ? 'chip active' : 'chip'}
            onClick={() => setFilterGroup('all')}
          >
            Все
          </button>
          {Object.entries(GROUPS).map(([key, g]) => (
            <button
              key={key}
              className={filterGroup === key ? 'chip active' : 'chip'}
              style={filterGroup === key ? { background: g.color } : {}}
              onClick={() => setFilterGroup(key)}
            >
              {g.title}
            </button>
          ))}
        </div>
        <div className="filter-row">
          <span className="filter-label">Статус:</span>
          <button
            className={filterStatus === 'all' ? 'chip active' : 'chip'}
            onClick={() => setFilterStatus('all')}
          >
            Все
          </button>
          {Object.entries(STATUS).map(([key, s]) => (
            <button
              key={key}
              className={filterStatus === key ? 'chip active' : 'chip'}
              style={filterStatus === key ? { background: s.color } : {}}
              onClick={() => setFilterStatus(key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      <section className="task-list">
        {Object.entries(GROUPS).map(([key, g]) => {
          const tasks = tasksByGroup[key];
          if (!tasks.length) return null;
          return (
            <div className="task-group" key={key}>
              <h2 className="task-group-title" style={{ color: g.color }}>
                {g.title}
                <span className="task-group-count">{tasks.length}</span>
              </h2>
              <div className="task-table">
                {tasks.map((t) => {
                  const s = getStatus(t.id);
                  return (
                    <div className="task-row" key={t.id}>
                      <div className="task-main">
                        <a
                          className="task-name"
                          href={t.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t.name}
                        </a>
                        <p className="task-how">{t.how}</p>
                      </div>
                      <div className="task-status">
                        <span
                          className="status-badge"
                          style={{ background: STATUS[s].color }}
                        >
                          {STATUS[s].label}
                        </span>
                        <div className="status-actions">
                          <button
                            className="status-btn pending"
                            disabled={s === 'pending'}
                            onClick={() => setStatus(t.id, 'pending')}
                          >
                            Ожидает
                          </button>
                          <button
                            className="status-btn passed"
                            disabled={s === 'passed'}
                            onClick={() => setStatus(t.id, 'passed')}
                          >
                            Отвалидировано
                          </button>
                          <button
                            className="status-btn failed"
                            disabled={s === 'failed'}
                            onClick={() => setStatus(t.id, 'failed')}
                          >
                            Провалено
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {filteredTasks.length === 0 && (
          <p className="empty">Нет задач под выбранные фильтры.</p>
        )}
      </section>
    </div>
  );
}
