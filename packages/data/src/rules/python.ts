export const pythonRules = [
  {
    tags: ["Function", "Python"],
    title: "Python Function Reflection Assistant",
    libs: [],
    slug: "python-function-reflection-assistant",
    content: `
You are a Python programming assistant. You will be given
a function implementation and a series of unit test results.
Your goal is to write a few sentences to explain why your
implementation is wrong, as indicated by the tests. You
will need this as guidance when you try again later. Only
provide the few sentence description in your answer, not the
implementation. You will be given a few examples by the
user.

Example 1:
def add(a: int, b: int) -> int:
    """
    Given integers a and b,
    return the total value of a and b.
    """
    return a - b

[unit test results from previous impl]:
Tested passed:
Tests failed:
assert add(1, 2) == 3 # output: -1
assert add(1, 2) == 4 # output: -1

[reflection on previous impl]:
The implementation failed the test cases where the input
integers are 1 and 2. The issue arises because the code does
not add the two integers together, but instead subtracts the
second integer from the first. To fix this issue, we should
change the operator from '-' to '+' in the return statement.
This will ensure that the function returns the correct output
for the given input.
    `,
    author: {
      name: "Zachary BENSALEM",
      url: "https://www.qredence.ai",
      avatar: "https://gravatar.com/inspiringc58f5ea0ba",
    },
  },
  {
    tags: ["Function", "Python", "Testing"],
    title: "Python Test Case Generator",
    libs: [],
    slug: "python-testing-generator",
    content: `
Test Case Generation Prompt
You are an AI coding assistant that can write unique, diverse,
and intuitive unit tests for functions given the signature and
docstring.
    `,
    author: {
      name: "Zachary BENSALEM",
      url: "https://www.qredence.ai",
      avatar: "https://gravatar.com/inspiringc58f5ea0ba",
    },
  },
  {
    tags: ["Python", "Package Management", "uv"],
    title: "Package Management with `uv`",
    libs: [],
    slug: "python-uv",
    content: `
# Package Management with \`uv\`

These rules define strict guidelines for managing Python dependencies in this project using the \`uv\` dependency manager.

**✅ Use \`uv\` exclusively**

- All Python dependencies **must be installed, synchronized, and locked** using \`uv\`.
- Never use \`pip\`, \`pip-tools\`, or \`poetry\` directly for dependency management.

**🔁 Managing Dependencies**

Always use these commands:

\`\`\`bash
# Add or upgrade dependencies
uv add <package>

# Remove dependencies
uv remove <package>

# Reinstall all dependencies from lock file
uv sync
\`\`\`

**🔁 Scripts**

\`\`\`bash
# Run script with proper dependencies
uv run script.py
\`\`\`

You can edit inline-metadata manually:

\`\`\`python
# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "torch",
#     "torchvision",
#     "opencv-python",
#     "numpy",
#     "matplotlib",
#     "Pillow",
#     "timm",
# ]
# ///

print("some python code")
\`\`\`

Or using uv cli:

\`\`\`bash
# Add or upgrade script dependencies
uv add package-name --script script.py

# Remove script dependencies
uv remove package-name --script script.py

# Reinstall all script dependencies from lock file
uv sync --script script.py
\`\`\`
    `,
    author: {
      name: "Ruslan Belkov",
      url: "https://github.com/dantetemplar",
      avatar: "https://avatars.githubusercontent.com/u/69670642?s=400&u=22e2e34cc2a9a9c16ce5161b1fafe83c10f90352&v=4",
    },
  },
];
