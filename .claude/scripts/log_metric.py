#!/usr/bin/env python3
import sys, json, os
from datetime import datetime

LOG_FILE = ".claude/logs/metrics.jsonl"

def log_metric(payload_str):
    try:
        data = json.loads(payload_str)
        if "timestamp" not in data:
            data["timestamp"] = datetime.utcnow().isoformat() + "Z"
        os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(data) + "\n")
    except Exception:
        pass

if __name__ == "__main__":
    if len(sys.argv) > 1:
        log_metric(sys.argv[1])